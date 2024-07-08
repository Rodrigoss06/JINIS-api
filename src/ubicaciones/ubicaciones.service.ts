import { Injectable } from '@nestjs/common';
import { MAE_UBICACIONES, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UbicacionesService {
    constructor(private prisma:PrismaService){}

    async ubicacion(
        ubicacionWhereUniqueInput: Prisma.MAE_UBICACIONESWhereUniqueInput
    ): Promise<MAE_UBICACIONES|null>{
        return this.prisma.mAE_UBICACIONES.findUnique({
            where: ubicacionWhereUniqueInput
        })
    }
}
