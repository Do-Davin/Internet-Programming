import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    private productRepository;
    constructor(productRepository: typeof Product);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    update(id: number, updateProductDto: any): Promise<[affectedCount: number]>;
    delete(id: number): Promise<number>;
}
