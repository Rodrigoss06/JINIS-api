import { Injectable } from '@nestjs/common';
import { USUARIO, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsuariosService {
    constructor(private prisma:PrismaService){}

    async participante(
        participanteWhereUniqueInput: Prisma.USUARIOWhereUniqueInput
    ): Promise<USUARIO|null>{
        return this.prisma.uSUARIO.findUnique({
            where: participanteWhereUniqueInput
        })
    }
    async participantes(
        skip?: number,
        take?: number,
        cursor?: Prisma.USUARIOWhereUniqueInput,
        where?: Prisma.USUARIOWhereInput,
        orderBy?: Prisma.USUARIOOrderByWithRelationInput,
    ):Promise<USUARIO[]>{
        return this.prisma.uSUARIO.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }
}
