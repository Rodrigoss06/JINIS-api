import { Injectable } from '@nestjs/common';
import { PONENTE, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PonentesService {
    constructor(private prisma:PrismaService){}

    async ponente(
        ponenteWhereUniqueInput: Prisma.PONENTEWhereUniqueInput
    ): Promise<PONENTE|null>{
        return this.prisma.pONENTE.findUnique({
            where: ponenteWhereUniqueInput
        })
    }
    async ponentes(
        skip?: number,
        take?: number,
        cursor?: Prisma.PONENTEWhereUniqueInput,
        where?: Prisma.PONENTEWhereInput,
        orderBy?: Prisma.PONENTEOrderByWithRelationInput,
    ):Promise<PONENTE[]>{
        return this.prisma.pONENTE.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }
}
