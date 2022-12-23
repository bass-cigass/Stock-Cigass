"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMagasinDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_magasin_dto_1 = require("./create-magasin.dto");
class UpdateMagasinDto extends (0, mapped_types_1.PartialType)(create_magasin_dto_1.CreateMagasinDto) {
}
exports.UpdateMagasinDto = UpdateMagasinDto;
//# sourceMappingURL=update-magasin.dto.js.map