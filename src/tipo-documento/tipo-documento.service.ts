import { Injectable } from '@nestjs/common';
import { Prisma, TIPO_DOCUMENTO } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TipoDocumentoService {
    constructor(private prisma:PrismaService){}

    async tipoDocumento(
        participanteWhereUniqueInput: Prisma.TIPO_DOCUMENTOWhereUniqueInput
    ): Promise<TIPO_DOCUMENTO|null>{
        return this.prisma.tIPO_DOCUMENTO.findUnique({
            where: participanteWhereUniqueInput
        })
    }
    async tiposDocumentos(
        skip?: number,
        take?: number,
        cursor?: Prisma.TIPO_DOCUMENTOWhereUniqueInput,
        where?: Prisma.TIPO_DOCUMENTOWhereInput,
        orderBy?: Prisma.TIPO_DOCUMENTOOrderByWithRelationInput,
    ):Promise<TIPO_DOCUMENTO[]>{
        return this.prisma.tIPO_DOCUMENTO.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        })
    }
}
