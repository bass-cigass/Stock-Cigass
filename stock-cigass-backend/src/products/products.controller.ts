import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { EmplacementEntity } from 'src/emplacement/emplacement.entity';
import { ProjetEntity } from 'src/projet/projet.entity';
import { TypeEntity } from 'src/type/type.entity';
import { ProductsDTO } from './products.dto';
import { ProductsService } from './products.service';

@Controller('produits')
export class ProductsController {
    constructor(private produitsService: ProductsService) {}

    @Get('listAllProducts')
      async listAllProducts(@Res() res) {
        console.log("--------------FIND ALL PRODUCTS-----------");
        const products =  await this.produitsService.listAll();
        console.log(products);
        return res.status(HttpStatus.OK).json(products);
        // return {
        //   statusCode: HttpStatus.OK,
        //   message: 'Products fetched successfully',
        //   products
        // };
      }

      @Post('addProduct')
      async createProduits(@Body() data: ProductsDTO) {
        // const prodEmplacement = new EmplacementEntity();
        // prodEmplacement.produits = EmplacementEntity["id"];
        // const prodType = new TypeEntity();
        // prodType.typeProd = TypeEntity["id"];
        // const prodProjet= new ProjetEntity();
        // prodProjet.projetProd = ProjetEntity["id"];
        // console.log()
        const products = await this.produitsService.create(data);


        return {
          statusCode: HttpStatus.OK,
          message: 'Product created successfully',
          products : products
        };
      }

      @Get(':id')
      async readUser(@Param('id') id: number) {
        const data =  await this.produitsService.read(id);
        return {
          statusCode: HttpStatus.OK,
          message: 'User fetched successfully',
          data,
        };
      }

      @Patch(':id')
      async uppdateUser(@Param('id') id: number, @Body() data: Partial<ProductsDTO>) {
        await this.produitsService.update(id, data);
        return {
          statusCode: HttpStatus.OK,
          message: 'Product updated successfully',
        };
      }

      @Delete(':id')
      async deleteUser(@Param('id') id: number) {
        await this.produitsService.destroy(id);
        return {
          statusCode: HttpStatus.OK,
          message: 'Product deleted successfully',
        };
      }
}
