import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

import { Role } from '../entities/role.entity';
import { Permission } from '../entities/permission.entity';
import { RolePermission } from 'src/entities/role-permissions.entity';
import { User } from '../entities/user.entity';
import { UserRole } from '../entities/user-role.entity';

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const roleRepo = app.get<Repository<Role>>(getRepositoryToken(Role));
  const permRepo = app.get<Repository<Permission>>(
    getRepositoryToken(Permission),
  );
  const rolePermRepo = app.get<Repository<RolePermission>>(
    getRepositoryToken(RolePermission),
  );
  const userRepo = app.get<Repository<User>>(getRepositoryToken(User));
  const userRoleRepo = app.get<Repository<UserRole>>(
    getRepositoryToken(UserRole),
  );

  // ROLES
  const adminRole = await roleRepo.save({ name: 'admin' });
  const userRole = await roleRepo.save({ name: 'user' });

  // PERMISSIONS
  const perms = await permRepo.save([
    { key: 'order.read' },
    { key: 'order.create' },
    { key: 'user.manage' },
  ]);

  // LINK ADMIN → ALL PERMS
  for (const p of perms) {
    await rolePermRepo.save({
      role: adminRole,
      permission: p,
    });
  }

  // ADMIN USER
  const passwordHash = await bcrypt.hash('admin12345', 10);

  const admin = await userRepo.save({
    email: 'admin@example.com',
    passwordHash,
    isActive: true,
  });

  await userRoleRepo.save({
    user: admin,
    role: adminRole,
  });

  console.log('Seeding completed');

  await app.close();
}

seed();
