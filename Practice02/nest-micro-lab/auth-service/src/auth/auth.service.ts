import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { randomBytes } from 'crypto';
import * as bcrypt from 'bcryptjs';

import { User } from 'src/entities/user.entity';
import { UserRole } from 'src/entities/user-role.entity';
import { Role } from 'src/entities/role.entity';
import { RolePermission } from 'src/entities/role-permissions.entity';
import { RefreshToken } from 'src/entities/refresh-token.entity';

type JwtPayload = {
  sub: number;
  email: string;
  roles: string[];
  permissions: string[];
};

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,

    @InjectRepository(User)
    private readonly users: Repository<User>,

    @InjectRepository(UserRole)
    private readonly userRoles: Repository<UserRole>,

    @InjectRepository(Role)
    private readonly roles: Repository<Role>,

    @InjectRepository(RolePermission)
    private readonly rolePerms: Repository<RolePermission>,

    @InjectRepository(RefreshToken)
    private readonly refreshTokens: Repository<RefreshToken>,
  ) {}

  // REGISTER
  async register(email: string, password: string) {
    const exists = await this.users.findOne({ where: { email } });
    if (exists) {
      throw new ConflictException('Email already exists');
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await this.users.save({
      email,
      passwordHash,
      isActive: true,
    });

    const role = await this.roles.findOne({ where: { name: 'user' } });
    if (role) {
      await this.userRoles.save({ user, role });
    }

    return { message: 'registered' };
  }

  async login(email: string, password: string) {
    const user = await this.users.findOne({ where: { email } });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) throw new UnauthorizedException('Invalid credentials');

    // roles
    const roles = await this.userRoles.find({
      where: { user: { id: user.id } },
      relations: { role: true },
    });

    const roleNames = roles.map((r) => r.role.name);
    const roleIds = roles.map((r) => r.role.id);

    // permissions
    const perms = roleIds.length
      ? await this.rolePerms
          .createQueryBuilder('rp')
          .leftJoinAndSelect('rp.permission', 'permission')
          .where('rp.roleId IN (:...roleIds)', { roleIds })
          .getMany()
      : [];

    const permissionKeys = [...new Set(perms.map((p) => p.permission.key))];

    // JWT payload
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      roles: roleNames,
      permissions: permissionKeys,
    };

    const accessToken = await this.jwt.signAsync(payload);

    // refresh token
    const refreshToken = randomBytes(48).toString('hex');
    const refreshTokenHash = await bcrypt.hash(refreshToken, 10);

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);

    await this.refreshTokens.save({
      user,
      tokenHash: refreshTokenHash,
      expiresAt,
    });

    return { accessToken, refreshToken };
  }
}
