import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { ChatService } from "./chat.service";
@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server

    constructor(private chatService:ChatService){}

    handleConnection(client: Socket, ...args: any[]) {
        console.log(`client connect: ${client.id}`)

        client.on('joinRoom',async(room:string)=>{
            client.join(room)
            console.log(`User joined room: ${room}`)
            this.server.to(room).emit('message',`User joined room: ${room}`)
            await this.chatService.createRoom(room)
        })

        client.on('leaveRoom', (roomName) => {
            client.leave(roomName);
            console.log(`User left room: ${roomName}`);
            this.server.to(roomName).emit('message', `User left room: ${roomName}`);
        });

        client.on('message', async({ roomName, message }) => {
            console.log(roomName)
            console.log(message)
            const room = await this.chatService.room(roomName)
            if (room) {
                await this.chatService.createMessage(message,room.id)
                this.server.to(roomName).emit('message', message);
            }
        });
    }
    handleDisconnect(client: Socket) {
        console.log(`client disconnect: ${client.id}`)
    }

        // @SubscribeMessage('message')
        // handleTestMensaje(@MessageBody() mensaje:string){
        //     // console.log(room)
        //     console.log(mensaje)
        //     this.server.emit('message', mensaje);
        // }

    // @SubscribeMessage('joinRoom')
    // handleJoinRoom(room: Socket){
    //     console.log(room)
    // }
    
}