import { Injectable } from '@nestjs/common';
import { MAE_TIPOS_PARTICIPANTES, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TiposParticipantesService {
    constructor(private prisma:PrismaService){}

    async participante(
        participanteWhereUniqueInput: Prisma.MAE_TIPOS_PARTICIPANTESWhereUniqueInput
    ): Promise<MAE_TIPOS_PARTICIPANTES|null>{
        return this.prisma.mAE_TIPOS_PARTICIPANTES.findUnique({
            where: participanteWhereUniqueInput
        })
    }
    async tiposParticipantes(
        skip?: number,
        take?: number,
        cursor?: Prisma.MAE_TIPOS_PARTICIPANTESWhereUniqueInput,
        where?: Prisma.MAE_TIPOS_PARTICIPANTESWhereInput,
        orderBy?: Prisma.MAE_TIPOS_PARTICIPANTESOrderByWithRelationInput,
    ):Promise<MAE_TIPOS_PARTICIPANTES[]>{
        return this.prisma.mAE_TIPOS_PARTICIPANTES.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }
}
