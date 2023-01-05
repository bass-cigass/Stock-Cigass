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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsEntity = void 0;
const typeorm_1 = require("typeorm");
const type_entity_1 = require("../type/type.entity");
const emplacement_entity_1 = require("../emplacement/emplacement.entity");
const projet_entity_1 = require("../projet/projet.entity");
let ProductsEntity = class ProductsEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ProductsEntity.prototype, "date_entree", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => type_entity_1.TypeEntity, (type) => type.typeProd),
    __metadata("design:type", type_entity_1.TypeEntity)
], ProductsEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => projet_entity_1.ProjetEntity, (projet) => projet.projetProd),
    __metadata("design:type", projet_entity_1.ProjetEntity)
], ProductsEntity.prototype, "projet", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => emplacement_entity_1.EmplacementEntity, (emplacement) => emplacement.produits),
    __metadata("design:type", emplacement_entity_1.EmplacementEntity)
], ProductsEntity.prototype, "emplacement", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductsEntity.prototype, "ref", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductsEntity.prototype, "libelle", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ProductsEntity.prototype, "date_exp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "quantite", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductsEntity.prototype, "unite", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "seuil", void 0);
ProductsEntity = __decorate([
    (0, typeorm_1.Entity)('produits')
], ProductsEntity);
exports.ProductsEntity = ProductsEntity;
//# sourceMappingURL=products.entity.js.map