import { Injectable } from '@nestjs/common';
import { Prisma, EVENTO } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EventosService {
    constructor(private prisma:PrismaService){}
    async evento(
        eventoWhereUniqueInput: Prisma.EVENTOWhereUniqueInput
    ): Promise<EVENTO|null>{
        return this.prisma.eVENTO.findUnique({
            where: eventoWhereUniqueInput
        })
    }
    async eventos(
        skip?: number,
        take?: number,
        cursor?: Prisma.EVENTOWhereUniqueInput,
        where?: Prisma.EVENTOWhereInput,
        orderBy?: Prisma.EVENTOOrderByWithRelationInput,
    ): Promise<EVENTO[]>{
        return this.prisma.eVENTO.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }
}
