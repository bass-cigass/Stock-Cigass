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
exports.TypeController = void 0;
const common_1 = require("@nestjs/common");
const type_service_1 = require("./type.service");
let TypeController = class TypeController {
    constructor(typeService) {
        this.typeService = typeService;
    }
    async listAllTypes() {
        const users = await this.typeService.listAll();
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Types fetched successfully',
            users
        };
    }
    async createUsers(data) {
        const type = await this.typeService.create(data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User created successfully',
            type: type
        };
    }
    async readUser(id) {
        const data = await this.typeService.read(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User fetched successfully',
            data,
        };
    }
    async uppdateUser(id, data) {
        await this.typeService.update(id, data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Type updated successfully',
        };
    }
    async deleteUser(id) {
        await this.typeService.destroy(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User deleted successfully',
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "listAllTypes", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "createUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "readUser", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "uppdateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TypeController.prototype, "deleteUser", null);
TypeController = __decorate([
    (0, common_1.Controller)('type'),
    __metadata("design:paramtypes", [type_service_1.TypeService])
], TypeController);
exports.TypeController = TypeController;
//# sourceMappingURL=type.controller.js.map