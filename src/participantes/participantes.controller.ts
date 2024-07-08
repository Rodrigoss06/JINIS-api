import { Controller, Get, Param } from '@nestjs/common';
import { ParticipantesService } from './participantes.service';

@Controller('participantes')
export class ParticipantesController {
    constructor(private participantesService:ParticipantesService){    }

    @Get("/")
    async getParticipantes(){
        console.log(111)
        const participantes = await this.participantesService.participantes()
        return {status:200,message:"get participantes",data:participantes}
    }

    @Get("/:id")
    async getParticipante(@Param('id') id:string){
        const participante = await this.participantesService.participante({ID_PARTICIPANTE:Number(id)})
        return {status:200,message:`get participante ${id}`, data:participante}
    }
}
