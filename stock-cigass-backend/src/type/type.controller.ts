import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { TypeDTO } from './type.dto';
import { TypeService } from './type.service';

@Controller('type')
export class TypeController {
    constructor(private typeService: TypeService) {}

      @Get()
      async listAllTypes() {
        const users =  await this.typeService.listAll();
        return {
          statusCode: HttpStatus.OK,
          message: 'Types fetched successfully',
          users
        };
      }

      @Post()
      async createUsers(@Body() data: TypeDTO) {
         const type = await this.typeService.create(data);
        return {
          statusCode: HttpStatus.OK,
          message: 'User created successfully',
          type : type
        };
      }

      @Get(':id')
      async readUser(@Param('id') id: number) {
        const data =  await this.typeService.read(id);
        return {
          statusCode: HttpStatus.OK,
          message: 'User fetched successfully',
          data,
        };
      }

      @Patch(':id')
      async uppdateUser(@Param('id') id: number, @Body() data: Partial<TypeDTO>) {
        await this.typeService.update(id, data);
        return {
          statusCode: HttpStatus.OK,
          message: 'Type updated successfully',
        };
      }

      @Delete(':id')
      async deleteUser(@Param('id') id: number) {
        await this.typeService.destroy(id);
        return {
          statusCode: HttpStatus.OK,
          message: 'User deleted successfully',
        };
      }
}
