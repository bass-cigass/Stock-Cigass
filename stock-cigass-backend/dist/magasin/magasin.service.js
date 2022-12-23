"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagasinService = void 0;
const common_1 = require("@nestjs/common");
let MagasinService = class MagasinService {
    create(createMagasinDto) {
        return 'This action adds a new magasin';
    }
    findAll() {
        return `This action returns all magasin`;
    }
    findOne(id) {
        return `This action returns a #${id} magasin`;
    }
    update(id, updateMagasinDto) {
        return `This action updates a #${id} magasin`;
    }
    remove(id) {
        return `This action removes a #${id} magasin`;
    }
};
MagasinService = __decorate([
    (0, common_1.Injectable)()
], MagasinService);
exports.MagasinService = MagasinService;
//# sourceMappingURL=magasin.service.js.map