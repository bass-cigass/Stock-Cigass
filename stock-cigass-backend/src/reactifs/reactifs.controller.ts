import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReactifsService } from './reactifs.service';
import { CreateReactifDto } from './dto/create-reactif.dto';
import { UpdateReactifDto } from './dto/update-reactif.dto';

@Controller('reactifs')
export class ReactifsController {
  constructor(private readonly reactifsService: ReactifsService) {}

  @Post()
  create(@Body() createReactifDto: CreateReactifDto) {
    return this.reactifsService.create(createReactifDto);
  }

  @Get()
  findAll() {
    return this.reactifsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reactifsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReactifDto: UpdateReactifDto) {
    return this.reactifsService.update(+id, updateReactifDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reactifsService.remove(+id);
  }
}
