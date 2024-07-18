import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private loginService:LoginService){}

    @Post("/")
    async getToken(@Body() body:{dni:string,contrasena:string}){
        try {
            const {dni,contrasena} = body
            console.log(dni)
            console.log(contrasena)
            const participante = await this.loginService.usuario({DNI:Number(dni),CONTRASENA:contrasena})
            if (participante) {
                const tipoUsuario = await this.loginService.tipoUsuario(participante?.ID_TIPO_USUARIO!)
                const tokenLogin = {id:participante?.ID_USUARIO,tipoUsuario:tipoUsuario?.DESCRIPCION}
                return {status:200,message:`get participante`, token:JSON.stringify(tokenLogin)}
            }
        } catch (error) {
            console.error(error)
            return {status:400,message:`get participante`, error}
        }
    }
}
