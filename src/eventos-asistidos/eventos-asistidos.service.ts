import { Injectable } from '@nestjs/common';
import { Prisma, TRS_EVENTOS_ASISTIDOS } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EventosAsistidosService {
    constructor(private prisma:PrismaService){}

    async eventosAsistido(
        eventoAsistidoWhereUniqueInput: Prisma.TRS_EVENTOS_ASISTIDOSWhereUniqueInput
    ): Promise<TRS_EVENTOS_ASISTIDOS|null>{
        return this.prisma.tRS_EVENTOS_ASISTIDOS.findUnique({
            where: eventoAsistidoWhereUniqueInput
        })
    }
}
