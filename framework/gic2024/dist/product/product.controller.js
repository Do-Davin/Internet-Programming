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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const multer = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const update_product_dto_1 = require("./dto/update-product.dto");
const multerOptions = {
    storage: multer.diskStorage({
        destination: './uploads/product',
        filename: (req, file, callback) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            callback(null, uniqueSuffix + '-' + file.originalname);
        },
    }),
    limits: {
        fileSize: 1 * 1024 * 1024,
    },
};
let ProductsController = class ProductsController {
    constructor(productService) {
        this.productService = productService;
    }
    findAll() {
        return this.productService.findAll();
    }
    createProduct(images, body) {
        const imagesPath = [];
        if (images) {
            for (const image of images) {
                imagesPath.push(image.path);
            }
        }
        console.log('imagesPath', imagesPath);
        const product = this.productService.create(Object.assign(Object.assign({}, body), { image: JSON.stringify(imagesPath) }));
        return product;
    }
    updateProduct(id, images, body) {
        const imagesPath = [];
        if (images) {
            for (const image of images) {
                imagesPath.push(image.path);
            }
        }
        console.log('update', id, body, imagesPath);
        const result = this.productService.update(id, Object.assign(Object.assign({}, body), { image: JSON.stringify(imagesPath) }));
        if (result) {
            return { message: 'Product updated successfully' };
        }
        else {
            return { message: 'Product not found' };
        }
    }
    deleteProduct(id) {
        const result = this.productService.delete(id);
        if (result) {
            return { message: 'Product deleted successfully' };
        }
        else {
            return { message: 'Product not found' };
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('image', 10, multerOptions)),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Object)
], ProductsController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('image', 10, multerOptions)),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array,
        update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", Object)
], ProductsController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], ProductsController.prototype, "deleteProduct", null);
ProductsController = __decorate([
    (0, common_1.Controller)('api/products'),
    __metadata("design:paramtypes", [product_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=product.controller.js.map