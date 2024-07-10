import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private loginService:LoginService){}

    @Post("/")
    async getToken(@Body() {correo,contrasena}:{correo:string,contrasena:string}){
        try {
            console.log(correo)
            console.log(contrasena)
            const participante = await this.loginService.usuario({CORREO_ELECTRONICO:correo,CONTRASENA:contrasena})
            const tipoUsuario = await this.loginService.tipoUsuario(participante?.ID_TIPO_USUARIO!)
            const tokenLogin = {id:participante?.ID_USUARIO,tipoUsuario:tipoUsuario?.DESCRIPCION}
            return {status:200,message:`get participante`, token:JSON.stringify(tokenLogin)}
        } catch (error) {
            console.error(error)
            return {status:400,message:`get participante`, error}
        }
    }
}
