import { Controller, Get, Param } from '@nestjs/common';
import { PonentesService } from './ponentes.service';

@Controller('ponentes')
export class PonentesController {

    constructor(private ponentesService:PonentesService){}

    @Get("/")
    async getPonentes(){
        const ponentes = await this.ponentesService.ponentes()
        return {status:200,message:"get ponentes", data:ponentes}
    }

    @Get("/:id")
    async getPonente(@Param('id') id:string){
        const ponente = await this.ponentesService.ponente({ID_PONENTE:Number(id)})
        return {status:200,message:`get ponente ${id}`, data:ponente}
    }
}
