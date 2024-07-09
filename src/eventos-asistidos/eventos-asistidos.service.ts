import { Injectable } from '@nestjs/common';
import { Prisma, EVENTOS_ASISTIDOS } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EventosAsistidosService {
    constructor(private prisma:PrismaService){}

    async eventosAsistido(
        eventoAsistidoWhereUniqueInput: Prisma.EVENTOS_ASISTIDOSWhereUniqueInput
    ): Promise<EVENTOS_ASISTIDOS|null>{
        return this.prisma.eVENTOS_ASISTIDOS.findUnique({
            where: eventoAsistidoWhereUniqueInput
        })
    }
}
