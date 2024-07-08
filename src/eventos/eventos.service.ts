import { Injectable } from '@nestjs/common';
import { Prisma, TRS_EVENTOS } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EventosService {
    constructor(private prisma:PrismaService){}
    async evento(
        eventoWhereUniqueInput: Prisma.TRS_EVENTOSWhereUniqueInput
    ): Promise<TRS_EVENTOS|null>{
        return this.prisma.tRS_EVENTOS.findUnique({
            where: eventoWhereUniqueInput
        })
    }
    async eventos(
        skip?: number,
        take?: number,
        cursor?: Prisma.TRS_EVENTOSWhereUniqueInput,
        where?: Prisma.TRS_EVENTOSWhereInput,
        orderBy?: Prisma.TRS_EVENTOSOrderByWithRelationInput,
    ): Promise<TRS_EVENTOS[]>{
        return this.prisma.tRS_EVENTOS.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }
}
