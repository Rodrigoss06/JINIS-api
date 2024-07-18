import { Injectable } from '@nestjs/common';
import { Prisma, EVENTOS_ASISTIDOS } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EventosAsistidosService {
    constructor(private prisma:PrismaService){}

    async eventoAsistido(
        eventoAsistidoWhereUniqueInput: Prisma.EVENTOS_ASISTIDOSWhereUniqueInput
    ): Promise<EVENTOS_ASISTIDOS|null>{
        return this.prisma.eVENTOS_ASISTIDOS.findUnique({
            where: eventoAsistidoWhereUniqueInput
        })
    }

    async eventosAsistidos(
        skip?: number,
        take?: number,
        cursor?: Prisma.EVENTOS_ASISTIDOSWhereUniqueInput,
        where?: Prisma.EVENTOS_ASISTIDOSWhereInput,
        orderBy?: Prisma.EVENTOS_ASISTIDOSOrderByWithRelationInput,
    ):Promise<EVENTOS_ASISTIDOS[]>{
        return this.prisma.eVENTOS_ASISTIDOS.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }
}
