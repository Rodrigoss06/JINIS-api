import { Injectable } from '@nestjs/common';
import { EVENTO, EVENTOS_ASISTIDOS, Prisma, USUARIO } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AsistenciaService {
    constructor(private prisma:PrismaService){}

    async usuario(
        participanteWhereUniqueInput: Prisma.USUARIOWhereUniqueInput
    ): Promise<USUARIO|null>{
        return await this.prisma.uSUARIO.findUnique({
            where: participanteWhereUniqueInput
        })
    }

    async evento(
        eventoWhereUniqueInput: Prisma.EVENTOWhereUniqueInput
    ):Promise<EVENTO|null>{
        return await this.prisma.eVENTO.findUnique({
            where: eventoWhereUniqueInput
        })
    }

    async createEventosAsistidos(
        evento_asistido: EVENTOS_ASISTIDOS
    ): Promise<EVENTOS_ASISTIDOS|null>{
        return await this.prisma.eVENTOS_ASISTIDOS.create({data:evento_asistido})
    }


}
