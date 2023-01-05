import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { ProjetDTO } from './projet.dto';
import { ProjetService } from './projet.service';

@Controller('projet')
export class ProjetController {
 constructor(private projetsService: ProjetService) {}

 
 @Get('listAllProjet')
 async listAllProjets(@Res() res) {
   console.log("--------------FIND ALL PROJECTS-----------");
   const projets =  await this.projetsService.listAll();
   console.log(projets);
   return res.status(HttpStatus.OK).json(projets);
   // return {
   //   statusCode: HttpStatus.OK,
   //   message: 'Products fetched successfully',
   //   products
   // };
 }

 @Post('addProjet')
 async createProjects(@Body() data: ProjetDTO) {
   const products = await this.projetsService.create(data);


   return {
     statusCode: HttpStatus.OK,
     message: 'Project created successfully',
     products : products
   };
 }

 @Get(':id')
 async readUser(@Param('id') id: number) {
   const data =  await this.projetsService.read(id);
   return {
     statusCode: HttpStatus.OK,
     message: 'Projet fetched successfully',
     data,
   };
 }

 @Patch(':id')
 async updateProjet(@Param('id') id: number, @Body() data: Partial<ProjetDTO>) {
   //const update = await this.projetsService.update(id, data );
   return {
     statusCode: HttpStatus.OK,
     message: 'Project updated successfully',
//      update
   };
 }

 @Delete(':id')
 async deleteProjet(@Param('id') id: number) {
   await this.projetsService.destroy(id);
   return {
     statusCode: HttpStatus.OK,
     message: 'Project deleted successfully',
   };
 }
}
