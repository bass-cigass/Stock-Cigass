import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config/constants';
import { ProductsModule } from './products/products.module';
import { EmplacementModule } from './emplacement/emplacement.module';
import { TypeModule } from './type/type.module';
import { ReactifsModule } from './reactifs/reactifs.module';
import { UsersModule } from './users/users.module';
import { MagasinModule } from './magasin/magasin.module';
import { ProjetModule } from './projet/projet.module';

@Module({
  imports: [ConfigModule.forRoot( { 
     envFilePath: '.env',
     isGlobal : true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>(DB_HOST),
        username: configService.get(DB_USER),
        password: configService.get(DB_PASSWORD),
        database: configService.get<string>(DB_DATABASE),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    ProductsModule,
    ReactifsModule,
    TypeModule,
    ProjetModule,
    EmplacementModule,
    MagasinModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
