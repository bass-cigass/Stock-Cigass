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
exports.TypeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const type_entity_1 = require("./type.entity");
let TypeService = class TypeService {
    constructor(typesRepository) {
        this.typesRepository = typesRepository;
    }
    async listAll() {
        return await this.typesRepository.find();
    }
    async create(data) {
        const type = this.typesRepository.create(data);
        await this.typesRepository.save(data);
        return type;
    }
    async findByLibelle(libelle) {
        return await this.typesRepository.findOne({
            where: {
                libelle: libelle,
            },
        });
    }
    async read(id) {
        return await this.typesRepository.findOne({ where: { id: id } });
    }
    async update(id, data) {
        await this.typesRepository.update({ id }, data);
        return await this.typesRepository.findOne({ where: {
                id: id
            }
        });
    }
    async destroy(id) {
        await this.typesRepository.delete({ id });
        return { deleted: true };
    }
};
TypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(type_entity_1.TypeEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TypeService);
exports.TypeService = TypeService;
//# sourceMappingURL=type.service.js.map