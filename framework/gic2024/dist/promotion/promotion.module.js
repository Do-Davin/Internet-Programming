"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionsModule = void 0;
const common_1 = require("@nestjs/common");
const promotion_controller_1 = require("./promotion.controller");
const promotion_service_1 = require("./promotion.service");
const sequelize_1 = require("@nestjs/sequelize");
const promotion_entity_1 = require("./entities/promotion.entity");
let PromotionsModule = class PromotionsModule {
};
PromotionsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([promotion_entity_1.Promotion])],
        controllers: [promotion_controller_1.PromotionsController],
        providers: [promotion_service_1.PromotionsService],
    })
], PromotionsModule);
exports.PromotionsModule = PromotionsModule;
//# sourceMappingURL=promotion.module.js.map