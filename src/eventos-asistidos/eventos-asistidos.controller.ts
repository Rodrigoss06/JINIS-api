import { Controller, Get, Param } from '@nestjs/common';
import { EventosAsistidosService } from './eventos-asistidos.service';

@Controller('eventos-asistidos')
export class EventosAsistidosController {
    constructor(private eventosAsistidosService:EventosAsistidosService){}

    @Get("/:id")
    async getEventoAsistido(@Param('id') id:string){
        const eventoAsistido = await this.eventosAsistidosService.eventoAsistido({ID_EVENTO_ASISTIDO:Number(id)})
        return {status:200,message:`get eventos asistidos ${id}`, data: eventoAsistido}
    }

    @Get("/")
    async getEventosAsistidos(){
        const eventosAsistidos = await this.eventosAsistidosService.eventosAsistidos()
        return {status:200,message:`get eventos asistidos`, data: eventosAsistidos}

    }

}
