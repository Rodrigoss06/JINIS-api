import { Module } from '@nestjs/common';
import { ParticipantesController } from './participantes/participantes.controller';
import { PonentesController } from './ponentes/ponentes.controller';
import { EventosController } from './eventos/eventos.controller';
import { HorariosController } from './horarios/horarios.controller';
import { UbicacionesController } from './ubicaciones/ubicaciones.controller';
import { EventosAsistidosController } from './eventos-asistidos/eventos-asistidos.controller';
import { TiposParticipantesController } from './tipos-participantes/tipos-participantes.controller';
import { ParticipantesService } from './participantes/participantes.service';
import { PonentesService } from './ponentes/ponentes.service';
import { EventosService } from './eventos/eventos.service';
import { HorariosService } from './horarios/horarios.service';
import { UbicacionesService } from './ubicaciones/ubicaciones.service';
import { EventosAsistidosService } from './eventos-asistidos/eventos-asistidos.service';
import { TiposParticipantesService } from './tipos-participantes/tipos-participantes.service';
import { PrismaService } from './prisma.service';
import { ChatGateway } from './chat/chat.gateway';
import { ChatService } from './chat/chat.service';

@Module({
  controllers: [ ParticipantesController, PonentesController, EventosController, HorariosController, UbicacionesController, EventosAsistidosController, TiposParticipantesController],
  providers: [ ChatGateway,ChatService,PrismaService, ParticipantesService, PonentesService, EventosService, HorariosService, UbicacionesService, EventosAsistidosService, TiposParticipantesService],
})
export class AppModule {}
