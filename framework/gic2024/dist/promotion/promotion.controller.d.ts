/// <reference types="multer" />
import { PromotionsService } from './promotion.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
export declare class PromotionsController {
    private readonly promotionService;
    constructor(promotionService: PromotionsService);
    findAll(): any;
    createPromotion(image: Express.Multer.File, body: CreatePromotionDto): any;
    updatePromotion(id: string, image: Express.Multer.File, body: Partial<UpdatePromotionDto>): any;
    deletePromotion(id: string): any;
}
