import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios/usuarios.controller';
import { PonentesController } from './ponentes/ponentes.controller';
import { EventosController } from './eventos/eventos.controller';
import { HorariosController } from './horarios/horarios.controller';
import { UbicacionesController } from './ubicaciones/ubicaciones.controller';
import { EventosAsistidosController } from './eventos-asistidos/eventos-asistidos.controller';
import { TiposParticipantesController } from './tipos-usuarios/tipos-usuarios.controller';
import { UsuariosService } from './usuarios/usuarios.service';
import { PonentesService } from './ponentes/ponentes.service';
import { EventosService } from './eventos/eventos.service';
import { HorariosService } from './horarios/horarios.service';
import { UbicacionesService } from './ubicaciones/ubicaciones.service';
import { EventosAsistidosService } from './eventos-asistidos/eventos-asistidos.service';
import { TiposParticipantesService } from './tipos-usuarios/tipos-usuarios.service';
import { PrismaService } from './prisma.service';
import { ChatGateway } from './chat/chat.gateway';
import { ChatService } from './chat/chat.service';
import { TipoDocumentoController } from './tipo-documento/tipo-documento.controller';
import { TipoDocumentoService } from './tipo-documento/tipo-documento.service';
import { ChatController } from './chat/chat.controller';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { AsistenciaController } from './asistencia/asistencia.controller';
import { AsistenciaService } from './asistencia/asistencia.service';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';

@Module({
  controllers: [ UsuariosController, PonentesController, EventosController, HorariosController, UbicacionesController, EventosAsistidosController, TiposParticipantesController, TipoDocumentoController, ChatController, LoginController, AsistenciaController],
  providers: [ ChatGateway,ChatService,PrismaService, UsuariosService, PonentesService, EventosService, HorariosService, UbicacionesService, EventosAsistidosService, TiposParticipantesService, TipoDocumentoService, LoginService, AsistenciaService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que el ConfigModule esté disponible en toda la aplicación
      envFilePath: '.env', // Ruta a tu archivo de configuración .env
    }),
    MailModule,
    // Otros módulos
  ],
})
export class AppModule {}
