import { Controller, Get, Param } from '@nestjs/common';
import { HorariosService } from './horarios.service';

@Controller('horarios')
export class HorariosController {
    constructor(private horariosService:HorariosService){}    

    @Get("/:id")
    async getHorario(@Param('id') id:string){
        const horario = await this.horariosService.Horario({ID_HORARIO:Number(id)})
        return {status:200,message:`get horario ${id}`,data:horario}
    }
}
