import { Controller, Get, Param } from '@nestjs/common';
import { UbicacionesService } from './ubicaciones.service';

@Controller('ubicaciones')
export class UbicacionesController {

    constructor(private ubicacionService:UbicacionesService){}

    @Get("/:id")
    async getUbicacion(@Param('id') id: string){
        const ubicacion = await this.ubicacionService.ubicacion({ID_UBICACION:Number(id)})
        return {status:200, message:"get Ubicacion", data:ubicacion}
    }
}
