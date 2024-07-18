import { Injectable } from '@nestjs/common';
import { TIPO_USUARIO, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TiposParticipantesService {
    constructor(private prisma:PrismaService){}

    async tipoUsuario(
        participanteWhereUniqueInput: Prisma.TIPO_USUARIOWhereUniqueInput
    ): Promise<TIPO_USUARIO|null>{
        return this.prisma.tIPO_USUARIO.findUnique({
            where: participanteWhereUniqueInput
        })
    }
    async tiposUsuarios(
        skip?: number,
        take?: number,
        cursor?: Prisma.TIPO_USUARIOWhereUniqueInput,
        where?: Prisma.TIPO_USUARIOWhereInput,
        orderBy?: Prisma.TIPO_USUARIOOrderByWithRelationInput,
    ):Promise<TIPO_USUARIO[]>{
        return this.prisma.tIPO_USUARIO.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }
}
