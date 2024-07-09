import { Injectable } from '@nestjs/common';
import { UBICACION, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UbicacionesService {
    constructor(private prisma:PrismaService){}

    async ubicacion(
        ubicacionWhereUniqueInput: Prisma.UBICACIONWhereUniqueInput
    ): Promise<UBICACION|null>{
        return this.prisma.uBICACION.findUnique({
            where: ubicacionWhereUniqueInput
        })
    }
}
