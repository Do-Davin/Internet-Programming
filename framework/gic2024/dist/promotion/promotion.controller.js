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
exports.PromotionsController = void 0;
const common_1 = require("@nestjs/common");
const promotion_service_1 = require("./promotion.service");
const create_promotion_dto_1 = require("./dto/create-promotion.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer = require("multer");
const multerOptions = {
    storage: multer.diskStorage({
        destination: './uploads/promotion',
        filename: (req, file, callback) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            callback(null, uniqueSuffix + '-' + file.originalname);
        },
    }),
    limits: {
        fileSize: 1 * 1024 * 1024,
    },
};
let PromotionsController = class PromotionsController {
    constructor(promotionService) {
        this.promotionService = promotionService;
    }
    findAll() {
        return this.promotionService.findAll();
    }
    createPromotion(image, body) {
        console.log('image', image);
        const promotion = this.promotionService.create(Object.assign(Object.assign({}, body), { image: image.path }));
        return promotion;
    }
    updatePromotion(id, image, body) {
        console.log('image', image);
        return this.promotionService.update(id, Object.assign(Object.assign({}, body), { image: image.path }));
    }
    deletePromotion(id) {
        const result = this.promotionService.delete(id);
        return result;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], PromotionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multerOptions)),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_promotion_dto_1.CreatePromotionDto]),
    __metadata("design:returntype", Object)
], PromotionsController.prototype, "createPromotion", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', multerOptions)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Object)
], PromotionsController.prototype, "updatePromotion", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], PromotionsController.prototype, "deletePromotion", null);
PromotionsController = __decorate([
    (0, common_1.Controller)('api/promotions'),
    __metadata("design:paramtypes", [promotion_service_1.PromotionsService])
], PromotionsController);
exports.PromotionsController = PromotionsController;
//# sourceMappingURL=promotion.controller.js.map