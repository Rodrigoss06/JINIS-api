import { Injectable } from '@nestjs/common';
import { Message, Prisma, Room } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChatService {
    constructor(private prisma:PrismaService){}

    async room(
        roomWhereUniqueInput: Prisma.RoomWhereUniqueInput
    ): Promise<Room|null>{
        return this.prisma.room.findUnique({
            where: roomWhereUniqueInput
        })
    }
    
    async rooms(
        skip?: number,
        take?: number,
        cursor?: Prisma.RoomWhereUniqueInput,
        where?: Prisma.RoomWhereInput,
        orderBy?: Prisma.RoomOrderByWithRelationInput,
    ): Promise<Room[]>{
        return this.prisma.room.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }

    async createRoom(
        roomName: string
    ){
        return await this.prisma.room.upsert({
            where:{id:0,name:roomName},
            update: {},
            create: {name:roomName}
        })
    }


    async message(
        messageWhereUniqueInput: Prisma.MessageWhereUniqueInput
    ): Promise<Message|null>{
        return this.prisma.message.findUnique({
            where: messageWhereUniqueInput
        })
    }
    
    async messages(
        skip?: number,
        take?: number,
        cursor?: Prisma.MessageWhereUniqueInput,
        where?: Prisma.MessageWhereInput,
        orderBy?: Prisma.MessageOrderByWithRelationInput,
    ): Promise<Message[]>{
        return this.prisma.message.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }

    async createMessage(
        content: string,
        roomId: number
    ){
        return await this.prisma.message.create({
            data:{
                content,
                roomId
            }
        })
    }

}
