import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
import { Promotion } from './entities/promotion.entity';
export declare class PromotionsService {
    private promotionRepository;
    constructor(promotionRepository: typeof Promotion);
    create(createProductDto: CreatePromotionDto): Promise<Promotion>;
    findAll(): Promise<Promotion[]>;
    update(id: string, updatePromotionDto: Partial<UpdatePromotionDto>): string;
    delete(id: string): string;
}
