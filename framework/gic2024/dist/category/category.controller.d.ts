/// <reference types="multer" />
import { CategoriesService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoriesController {
    private readonly categoryService;
    constructor(categoryService: CategoriesService);
    findAll(): any;
    createCategory(image: Express.Multer.File, body: CreateCategoryDto): any;
    updateCategory(id: number, image: Express.Multer.File, body: CreateCategoryDto): any;
    deleteCategory(id: number): any;
}
