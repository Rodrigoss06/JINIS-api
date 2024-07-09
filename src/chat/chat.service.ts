import { Injectable } from '@nestjs/common';
import { MENSAJE, Prisma, ROOM } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChatService {
    constructor(private prisma:PrismaService){}

    async room(
        ROOMWhereUniqueInput: Prisma.ROOMWhereUniqueInput
    ): Promise<ROOM|null>{
        return this.prisma.rOOM.findUnique({
            where: ROOMWhereUniqueInput
        })
    }
    
    async rooms(
        skip?: number,
        take?: number,
        cursor?: Prisma.ROOMWhereUniqueInput,
        where?: Prisma.ROOMWhereInput,
        orderBy?: Prisma.ROOMOrderByWithRelationInput,
    ): Promise<ROOM[]>{
        return this.prisma.rOOM.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }

    async createRoom(
        ROOMName: string
    ){
        return await this.prisma.rOOM.upsert({
            where:{ID_ROOM:0,NOMBRE:ROOMName},
            update: {},
            create: {NOMBRE:ROOMName}
        })
    }


    async mensaje(
        MENSAJEWhereUniqueInput: Prisma.MENSAJEWhereUniqueInput
    ): Promise<MENSAJE|null>{
        return this.prisma.mENSAJE.findUnique({
            where: MENSAJEWhereUniqueInput
        })
    }
    
    async mensajes(
        skip?: number,
        take?: number,
        cursor?: Prisma.MENSAJEWhereUniqueInput,
        where?: Prisma.MENSAJEWhereInput,
        orderBy?: Prisma.MENSAJEOrderByWithRelationInput,
    ): Promise<MENSAJE[]>{
        return this.prisma.mENSAJE.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }

    async createMensaje(
        content: string,
        roomId: number,
        usuarioId:number
    ){
        return await this.prisma.mENSAJE.create({
            data:{
                ID_USUARIO:usuarioId,
                CONTENIDO:content,
                ID_ROOM:roomId
            }
        })
    }

}
