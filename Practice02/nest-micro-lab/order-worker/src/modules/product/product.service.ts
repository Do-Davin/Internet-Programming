import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { Category } from '../category/entities/category.entity';
import { Repository } from 'typeorm';
import { CreateProductInput } from 'src/graphql/inputs/create-product.input';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPO')
    private readonly repo: Repository<Product>,
  ) {}

  async create(dto: CreateProductDto) {
    const cat = await this.repo.manager.findOne(Category, {
      where: { id: dto.categoryId },
    });

    if (!cat) throw new NotFoundException('Category not found');

    try {
      const product = this.repo.create(dto);
      return await this.repo.save(product);
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (e.code === '23505')
        throw new BadRequestException('SKU already exists');
      throw e;
    }
  }

  async createProductCodeFirst(dto: CreateProductInput) {
    const cat = await this.repo.manager.findOne(Category, {
      where: { id: dto.categoryId },
    });

    if (!cat) throw new NotFoundException('Category not found');

    try {
      const product = this.repo.create(dto);
      return await this.repo.save(product);
    } catch (e) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (e.code === '23505')
        throw new BadRequestException('SKU already exists');
      throw e;
    }
  }

  async findAll(query: {
    categoryId?: string;
    minPrice?: number;
    maxPrice?: number;
    page?: number;
    limit?: number;
  }) {
    const { categoryId, minPrice, maxPrice } = query;

    const pageNum = Number(query.page) || 1;
    const limitNum = Number(query.limit) || 10;

    const qb = this.repo
      .createQueryBuilder('p')
      .leftJoinAndSelect('p.category', 'category');

    if (categoryId) qb.andWhere('p.categoryId = :categoryId', { categoryId });
    if (minPrice) qb.andWhere('p.price >= :minPrice', { minPrice });
    if (maxPrice) qb.andWhere('p.price <= :maxPrice', { maxPrice });

    qb.skip((pageNum - 1) * limitNum).take(limitNum);

    const [data, total] = await qb.getManyAndCount();

    return {
      data,
      total,
      page: pageNum,
      limit: limitNum,
      totalPages: Math.ceil(total / limitNum),
    };
  }

  async findAllProducts(): Promise<Product[]> {
    return await this.repo.find({
      relations: ['category'],
    });
  }

  async findOne(id: string) {
    const product = await this.repo.findOne({
      where: { id },
      relations: ['category'],
    });

    if (!product) throw new NotFoundException(`Product ${id} not found`);
    return product;
  }

  async update(id: string, dto: Partial<Product>) {
    const product = await this.findOne(id);
    Object.assign(product, dto);
    return this.repo.save(product);
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    return this.repo.remove(product);
  }
}
