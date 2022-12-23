import { ReactifsService } from './reactifs.service';
import { CreateReactifDto } from './dto/create-reactif.dto';
import { UpdateReactifDto } from './dto/update-reactif.dto';
export declare class ReactifsController {
    private readonly reactifsService;
    constructor(reactifsService: ReactifsService);
    create(createReactifDto: CreateReactifDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateReactifDto: UpdateReactifDto): string;
    remove(id: string): string;
}
