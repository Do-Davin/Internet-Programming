"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionsService = void 0;
const common_1 = require("@nestjs/common");
const promotion_entity_1 = require("./entities/promotion.entity");
const sequelize_1 = require("@nestjs/sequelize");
let PromotionsService = class PromotionsService {
    constructor(promotionRepository) {
        this.promotionRepository = promotionRepository;
    }
    create(createProductDto) {
        return this.promotionRepository.create(createProductDto);
    }
    findAll() {
        return this.promotionRepository.findAll();
    }
    update(id, updatePromotionDto) {
        const result = this.promotionRepository.update(updatePromotionDto, {
            where: { id },
            returning: true,
        });
        if (!result) {
            throw new Error('Promotion not found');
        }
        return 'Update success';
    }
    delete(id) {
        const result = this.promotionRepository.destroy({
            where: { id },
        });
        if (!result) {
            throw new Error('Promotion not found');
        }
        return 'Delete success';
    }
};
PromotionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(promotion_entity_1.Promotion)),
    __metadata("design:paramtypes", [Object])
], PromotionsService);
exports.PromotionsService = PromotionsService;
//# sourceMappingURL=promotion.service.js.map