import { Injectable } from '@nestjs/common';
import { MAE_PONENTES, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PonentesService {
    constructor(private prisma:PrismaService){}

    async ponente(
        ponenteWhereUniqueInput: Prisma.MAE_PONENTESWhereUniqueInput
    ): Promise<MAE_PONENTES|null>{
        return this.prisma.mAE_PONENTES.findUnique({
            where: ponenteWhereUniqueInput
        })
    }
    async ponentes(
        skip?: number,
        take?: number,
        cursor?: Prisma.MAE_PONENTESWhereUniqueInput,
        where?: Prisma.MAE_PONENTESWhereInput,
        orderBy?: Prisma.MAE_PONENTESOrderByWithRelationInput,
    ):Promise<MAE_PONENTES[]>{
        return this.prisma.mAE_PONENTES.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }
}
