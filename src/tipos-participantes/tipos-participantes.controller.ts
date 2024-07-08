import { Controller, Get } from '@nestjs/common';
import { TiposParticipantesService } from './tipos-participantes.service';

@Controller('tipos-participantes')
export class TiposParticipantesController {
    constructor(private tiposParticipantesService:TiposParticipantesService){}

    @Get("/")
    async getTiposParticipantes(){
        const tiposParticipantes = await this.tiposParticipantesService.tiposParticipantes()
        return {status:200,message:"get tipos participantes",data: tiposParticipantes}
    }
}
