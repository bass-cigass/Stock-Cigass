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
const products_service_1 = require("./products.service");
let ProductsController = class ProductsController {
    constructor(produitsService) {
        this.produitsService = produitsService;
    }
    async listAllProducts(res) {
        console.log("--------------FIND ALL PRODUCTS-----------");
        const products = await this.produitsService.listAll();
        console.log(products);
        return res.status(common_1.HttpStatus.OK).json(products);
    }
    async createProduits(data) {
        const products = await this.produitsService.create(data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Product created successfully',
            products: products
        };
    }
    async readUser(id) {
        const data = await this.produitsService.read(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User fetched successfully',
            data,
        };
    }
    async uppdateUser(id, data) {
        await this.produitsService.update(id, data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Product updated successfully',
        };
    }
    async deleteUser(id) {
        await this.produitsService.destroy(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Product deleted successfully',
        };
    }
};
__decorate([
    (0, common_1.Get)('listAllProducts'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "listAllProducts", null);
__decorate([
    (0, common_1.Post)('addProduct'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "createProduits", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "readUser", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "uppdateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteUser", null);
ProductsController = __decorate([
    (0, common_1.Controller)('produits'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map