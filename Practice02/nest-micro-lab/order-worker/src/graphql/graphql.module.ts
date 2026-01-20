import { Module } from '@nestjs/common';
import { CategoryModule } from 'src/modules/category/category.module';
import { ProductsModule } from 'src/modules/product/product.module';
// import { CategoryResolver } from './resolvers/category.resolver';
// import { ProductResolver } from './resolvers/product.resolver';
import { ProductCodeFirstResolver } from './resolvers/product.codefirst.resolver';
import { CategoryCodeFirstResolver } from './resolvers/category.codefirst.resolver';

@Module({
  imports: [CategoryModule, ProductsModule],
  providers: [ProductCodeFirstResolver, CategoryCodeFirstResolver],
})
export class GraphqlModule {}
