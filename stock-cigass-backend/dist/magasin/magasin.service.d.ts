import { CreateMagasinDto } from './dto/create-magasin.dto';
import { UpdateMagasinDto } from './dto/update-magasin.dto';
export declare class MagasinService {
    create(createMagasinDto: CreateMagasinDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMagasinDto: UpdateMagasinDto): string;
    remove(id: number): string;
}
