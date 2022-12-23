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
exports.ReactifsController = void 0;
const common_1 = require("@nestjs/common");
const reactifs_service_1 = require("./reactifs.service");
const create_reactif_dto_1 = require("./dto/create-reactif.dto");
const update_reactif_dto_1 = require("./dto/update-reactif.dto");
let ReactifsController = class ReactifsController {
    constructor(reactifsService) {
        this.reactifsService = reactifsService;
    }
    create(createReactifDto) {
        return this.reactifsService.create(createReactifDto);
    }
    findAll() {
        return this.reactifsService.findAll();
    }
    findOne(id) {
        return this.reactifsService.findOne(+id);
    }
    update(id, updateReactifDto) {
        return this.reactifsService.update(+id, updateReactifDto);
    }
    remove(id) {
        return this.reactifsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reactif_dto_1.CreateReactifDto]),
    __metadata("design:returntype", void 0)
], ReactifsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReactifsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReactifsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_reactif_dto_1.UpdateReactifDto]),
    __metadata("design:returntype", void 0)
], ReactifsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReactifsController.prototype, "remove", null);
ReactifsController = __decorate([
    (0, common_1.Controller)('reactifs'),
    __metadata("design:paramtypes", [reactifs_service_1.ReactifsService])
], ReactifsController);
exports.ReactifsController = ReactifsController;
//# sourceMappingURL=reactifs.controller.js.map