import { Controller, Get, Param } from '@nestjs/common';
import { TiposParticipantesService } from './tipos-usuarios.service';

@Controller('tipos-usuarios')
export class TiposParticipantesController {
    constructor(private tiposParticipantesService:TiposParticipantesService){}

    @Get("/")
    async getTiposUsuarios(){
        const tiposParticipantes = await this.tiposParticipantesService.tiposUsuarios()
        return {status:200,message:"get tipos participantes",data: tiposParticipantes}
    }
    @Get("/:id")
    async getTipoUsuario(@Param('id') id:string){
        const tipoUsuario = await this.tiposParticipantesService.tipoUsuario({ID_TIPO_USUARIO:Number(id)})
        return {status:200,message:"get tipos participantes",data: tipoUsuario}
    }
}
