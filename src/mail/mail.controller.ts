import { Body, Controller, Post, Res } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
    constructor(private mailService:MailService){}

    @Post("/certificados/test")
    async certificadosTest(){
        try {
            console.log("first")
        await this.mailService.testEmail()
        console.log(1111111)
        } catch (error) {
            console.log(error)
        }
    }

    @Post("/certificados/Jinis")
    async certificadosJinis(@Body() body:any){
        console.log(body)
        // await this.mailService.testEmail()
    }
}
