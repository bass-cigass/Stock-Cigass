import { Body, Controller, Delete, Get, HttpStatus, Logger, Param, Patch, Post, Res } from '@nestjs/common';
import { UsersDTO } from './users.dto';
import { UsersService } from './users.service';

@Controller('utilisateur')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get('listAll')
      async listAllUsers(@Res() res) {
        console.log("--------------FIND ALL USERS-----------");
        const users =  await this.usersService.listAll();
        //console.log(users);
        return res.status(HttpStatus.OK).json(users);
        // {
        //   statusCode: HttpStatus.OK,
        //   message: 'Users fetched successfully',
        //   users: users
        // };
      }

      @Post('create')
      async createUsers(@Body() data: UsersDTO) {
        console.log("--------------CREATE AN USER-----------");
         const user = await this.usersService.create(data);
         console.log("***********SUCCESSFULLY CREATED************")
         console.log(user);
        return {
          statusCode: HttpStatus.OK,
          message: 'User created successfully',
          user: user
        };
      }

      @Get(':id')
      async readUser(@Param('id') id: number) {
        console.log("######FETCHING ONE USER######")
        const data =  await this.usersService.read(id);
        return {
          statusCode: HttpStatus.OK,
          message: 'User fetched successfully',
          data,
        };
      }

      @Patch(':id')
      async uppdateUser(@Param('id') id: number, @Body() data: Partial<UsersDTO>) {
        await this.usersService.update(id, data);
        return {
          statusCode: HttpStatus.OK,
          message: 'User updated successfully',
        };
      }
      
      @Delete(':id')
      async deleteUser(@Param('id') id: number) {
        await this.usersService.destroy(id);
        return {
          statusCode: HttpStatus.OK,
          message: 'User deleted successfully',
        };
      }

}
