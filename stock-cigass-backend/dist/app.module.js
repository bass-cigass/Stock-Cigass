"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const constants_1 = require("./config/constants");
const products_module_1 = require("./products/products.module");
const emplacement_module_1 = require("./emplacement/emplacement.module");
const projet_module_1 = require("./projet/projet.module");
const type_module_1 = require("./type/type.module");
const reactifs_module_1 = require("./reactifs/reactifs.module");
const users_module_1 = require("./users/users.module");
const magasin_module_1 = require("./magasin/magasin.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get(constants_1.DB_HOST),
                    username: configService.get(constants_1.DB_USER),
                    password: configService.get(constants_1.DB_PASSWORD),
                    database: configService.get(constants_1.DB_DATABASE),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            users_module_1.UsersModule,
            products_module_1.ProductsModule,
            reactifs_module_1.ReactifsModule,
            type_module_1.TypeModule,
            projet_module_1.ProjetModule,
            emplacement_module_1.EmplacementModule,
            magasin_module_1.MagasinModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map