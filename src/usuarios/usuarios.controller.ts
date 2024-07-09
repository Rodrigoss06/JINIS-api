import { Controller, Get, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private usuariosService:UsuariosService){    }

    @Get("/")
    async getUsuarios(){
        console.log(111)
        const participantes = await this.usuariosService.participantes()
        return {status:200,message:"get participantes",data:participantes}
    }

    @Get("/:id")
    async getUsuario(@Param('id') id:string){
        const participante = await this.usuariosService.participante({ID_USUARIO:Number(id)})
        return {status:200,message:`get participante ${id}`, data:participante}
    }
}
