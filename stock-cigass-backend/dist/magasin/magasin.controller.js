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
exports.MagasinController = void 0;
const common_1 = require("@nestjs/common");
const magasin_service_1 = require("./magasin.service");
const create_magasin_dto_1 = require("./dto/create-magasin.dto");
const update_magasin_dto_1 = require("./dto/update-magasin.dto");
let MagasinController = class MagasinController {
    constructor(magasinService) {
        this.magasinService = magasinService;
    }
    create(createMagasinDto) {
        return this.magasinService.create(createMagasinDto);
    }
    findAll() {
        return this.magasinService.findAll();
    }
    findOne(id) {
        return this.magasinService.findOne(+id);
    }
    update(id, updateMagasinDto) {
        return this.magasinService.update(+id, updateMagasinDto);
    }
    remove(id) {
        return this.magasinService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_magasin_dto_1.CreateMagasinDto]),
    __metadata("design:returntype", void 0)
], MagasinController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MagasinController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MagasinController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_magasin_dto_1.UpdateMagasinDto]),
    __metadata("design:returntype", void 0)
], MagasinController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MagasinController.prototype, "remove", null);
MagasinController = __decorate([
    (0, common_1.Controller)('magasin'),
    __metadata("design:paramtypes", [magasin_service_1.MagasinService])
], MagasinController);
exports.MagasinController = MagasinController;
//# sourceMappingURL=magasin.controller.js.map