import { Controller, Get, Param } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {

    constructor(private chatService: ChatService){}

    @Get("/")
    async getchats(){
        const chats = await this.chatService.rooms()
        return {status:200,message:"get eventos",data:chats}
    }

    @Get("/:id")
    async getMensajes(@Param('id') id: string){
        const mensajes = await this.chatService.mensajes()
        return {status:200,message:"get eventos",data:mensajes}
    }
}
