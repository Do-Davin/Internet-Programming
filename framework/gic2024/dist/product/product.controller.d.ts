/// <reference types="multer" />
import { ProductsService } from './product.service';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    findAll(): any;
    createProduct(images: Array<Express.Multer.File>, body: any): any;
    updateProduct(id: number, images: Array<Express.Multer.File>, body: UpdateProductDto): any;
    deleteProduct(id: number): any;
}
