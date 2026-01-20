import { Module } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductsController } from './product.controller';
import { ProductsService } from './product.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
