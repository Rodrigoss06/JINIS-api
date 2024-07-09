import { Controller, Get, Param } from '@nestjs/common';
import { EventosAsistidosService } from './eventos-asistidos.service';

@Controller('eventos-asistidos')
export class EventosAsistidosController {
    constructor(private eventosAsistidosService:EventosAsistidosService){}

    @Get("/:id")
    async getEventosAsistidos(@Param('id') id:string){
        const eventosAsistidos = await this.eventosAsistidosService.eventosAsistido({ID_EVENTO_ASISTIDO:Number(id)})
        return {status:200,message:`get eventos asistidos ${id}`, data: eventosAsistidos}
    }

}
