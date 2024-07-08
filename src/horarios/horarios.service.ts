import { Injectable } from '@nestjs/common';
import { Prisma, TRS_HORARIOS } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class HorariosService {
    constructor(private prisma:PrismaService){}

    async Horario(
        horarioWhereUniqueInput: Prisma.TRS_HORARIOSWhereUniqueInput
    ):Promise<TRS_HORARIOS|null>{
        return this.prisma.tRS_HORARIOS.findUnique({
            where:horarioWhereUniqueInput
        })
    }
}
