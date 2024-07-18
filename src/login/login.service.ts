import { Injectable } from '@nestjs/common';
import { Prisma, TIPO_USUARIO, USUARIO } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LoginService {
    constructor(private prisma:PrismaService){}

    async usuario(
        participanteWhereUniqueInput: Prisma.USUARIOWhereInput
    ): Promise<USUARIO|null>{
        return this.prisma.uSUARIO.findFirst({
            where: participanteWhereUniqueInput
        })
    }
    async tipoUsuario(
        id_tipo_usuario:number
    ):Promise<TIPO_USUARIO|null>{
        return await this.prisma.tIPO_USUARIO.findFirst({
            where:{
                ID_TIPO_USUARIO:id_tipo_usuario
            }
        })
    }
}
