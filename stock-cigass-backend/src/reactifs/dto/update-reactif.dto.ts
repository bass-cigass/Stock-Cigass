import { PartialType } from '@nestjs/mapped-types';
import { CreateReactifDto } from './create-reactif.dto';

export class UpdateReactifDto extends PartialType(CreateReactifDto) {}
