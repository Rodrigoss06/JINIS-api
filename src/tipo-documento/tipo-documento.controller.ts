import { Controller, Get, Param } from '@nestjs/common';
import { TipoDocumentoService } from './tipo-documento.service';

@Controller('tipo-documento')
export class TipoDocumentoController {
    constructor(private tipoDocumentoService:TipoDocumentoService){}

    @Get("/")
    async getTiposDocumentos(){
        const tiposParticipantes = await this.tipoDocumentoService.tiposDocumentos()
        return {status:200,message:"get tipos participantes",data: tiposParticipantes}
    }
    @Get("/:id")
    async getTipoDocumento(@Param('id') id:string){
        const tipoUsuario = await this.tipoDocumentoService.tipoDocumento({ID_TIPO_DOCUMENTO:Number(id)})
        return {status:200,message:"get tipos participantes",data: tipoUsuario}
    }
}
