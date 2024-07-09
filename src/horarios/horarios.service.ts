import { Injectable } from '@nestjs/common';
import { Prisma, HORARIO } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class HorariosService {
    constructor(private prisma:PrismaService){}

    async Horario(
        horarioWhereUniqueInput: Prisma.HORARIOWhereUniqueInput
    ):Promise<HORARIO|null>{
        return this.prisma.hORARIO.findUnique({
            where:horarioWhereUniqueInput
        })
    }
}
