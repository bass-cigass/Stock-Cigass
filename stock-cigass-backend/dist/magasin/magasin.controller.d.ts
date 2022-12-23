import { MagasinService } from './magasin.service';
import { CreateMagasinDto } from './dto/create-magasin.dto';
import { UpdateMagasinDto } from './dto/update-magasin.dto';
export declare class MagasinController {
    private readonly magasinService;
    constructor(magasinService: MagasinService);
    create(createMagasinDto: CreateMagasinDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMagasinDto: UpdateMagasinDto): string;
    remove(id: string): string;
}
