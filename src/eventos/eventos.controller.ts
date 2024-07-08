import { Controller, Get, Param } from '@nestjs/common';
import { EventosService } from './eventos.service';

@Controller('eventos')
export class EventosController {

    constructor(private eventosService: EventosService){}

    @Get("/")
    async getEventos(){
        const eventos = await this.eventosService.eventos()
        return {status:200,message:"get eventos",data:eventos}
    }

    @Get("/:id")
    async getEvento(@Param('id') id: string){
        const eventos = await this.eventosService.evento({ID_EVENTO: Number(id)})
        return {status:200,message:"get eventos",data:eventos}
    }


}
