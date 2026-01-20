import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ProductType } from '../types/product.type';
import { ProductsService } from 'src/modules/product/product.service';
import { CategoryService } from 'src/modules/category/category.service';
import { CreateProductInput } from '../inputs/create-product.input';
import { CategoryType } from '../types/category.type';

@Resolver(() => ProductType)
export class ProductCodeFirstResolver {
  constructor(
    private readonly productService: ProductsService,
    private readonly categoryService: CategoryService,
  ) {}

  @Query(() => [ProductType])
  products() {
    return this.productService.findAllProducts();
  }

  @Query(() => ProductType, { nullable: true })
  product(@Args('id') id: string) {
    return this.productService.findOne(id);
  }

  @Mutation(() => ProductType)
  createProduct(@Args('input') input: CreateProductInput) {
    return this.productService.createProductCodeFirst(input);
  }

  @ResolveField(() => CategoryType, { nullable: true })
  category(@Parent() product: ProductType) {
    return this.categoryService.findOne(product.categoryId);
  }
}
