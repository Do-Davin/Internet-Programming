import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CategoryService } from 'src/modules/category/category.service';
import { CreateProductDto } from 'src/modules/product/dto/create-product.dto';
import { ProductsService } from 'src/modules/product/product.service';

@Resolver('Product')
export class ProductResolver {
  constructor(
    private readonly productService: ProductsService,
    private readonly categoryService: CategoryService,
  ) {}

  @Query('products')
  products() {
    return this.productService.findAllProducts();
  }

  @Query('product')
  product(@Args('id') id: string) {
    // GraphQL ID comes as string; convert if needed
    return this.productService.findOne(id);
  }

  @Mutation('createProduct')
  createProduct(
    @Args('name') name: string,
    @Args('price') price: number,
    @Args('categoryId') categoryId: string,
  ) {
    return this.productService.create({
      name,
      price,
      categoryId,
      sku: '',
    });
  }

  @ResolveField('category')
  category(@Parent() product: CreateProductDto) {
    return this.categoryService.findOne(product.categoryId);
  }
}
