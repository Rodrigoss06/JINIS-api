import { Injectable } from '@nestjs/common';
import { MAE_PARTICIPANTES, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ParticipantesService {
    constructor(private prisma:PrismaService){}

    async participante(
        participanteWhereUniqueInput: Prisma.MAE_PARTICIPANTESWhereUniqueInput
    ): Promise<MAE_PARTICIPANTES|null>{
        return this.prisma.mAE_PARTICIPANTES.findUnique({
            where: participanteWhereUniqueInput
        })
    }
    async participantes(
        skip?: number,
        take?: number,
        cursor?: Prisma.MAE_PARTICIPANTESWhereUniqueInput,
        where?: Prisma.MAE_PARTICIPANTESWhereInput,
        orderBy?: Prisma.MAE_PARTICIPANTESOrderByWithRelationInput,
    ):Promise<MAE_PARTICIPANTES[]>{
        return this.prisma.mAE_PARTICIPANTES.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }
}
