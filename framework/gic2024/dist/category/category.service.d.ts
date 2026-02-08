import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
export declare class CategoriesService {
    private categoryRepository;
    constructor(categoryRepository: typeof Category);
    create(createProductDto: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): string;
    delete(id: number): string;
}
