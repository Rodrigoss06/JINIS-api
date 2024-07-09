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

@Module({
  controllers: [ UsuariosController, PonentesController, EventosController, HorariosController, UbicacionesController, EventosAsistidosController, TiposParticipantesController, TipoDocumentoController, ChatController],
  providers: [ ChatGateway,ChatService,PrismaService, UsuariosService, PonentesService, EventosService, HorariosService, UbicacionesService, EventosAsistidosService, TiposParticipantesService, TipoDocumentoService],
})
export class AppModule {}
