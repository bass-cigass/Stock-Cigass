import { CreateReactifDto } from './dto/create-reactif.dto';
import { UpdateReactifDto } from './dto/update-reactif.dto';
export declare class ReactifsService {
    create(createReactifDto: CreateReactifDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateReactifDto: UpdateReactifDto): string;
    remove(id: number): string;
}
