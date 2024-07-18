import { Body, Controller, Get, Post } from '@nestjs/common';
import { AsistenciaService } from './asistencia.service';

@Controller('asistencia')
export class AsistenciaController {
  constructor(private asistenciaService: AsistenciaService) {}

  @Post('/')
  async asistencia(@Body() body: { usuarioId: number; eventoId: number }) {
    try {
        console.log(body)
      const { usuarioId, eventoId } = body;
      console.log(usuarioId);
      console.log(eventoId);
      const usuario = await this.asistenciaService.usuario({
        ID_USUARIO: usuarioId,
      });
      const evento = await this.asistenciaService.evento({
        ID_EVENTO: eventoId,
      });
      console.log(usuario);
      console.log(evento);
      if (usuario && evento) {
        const asistencia = await this.asistenciaService.createEventosAsistidos({
          ID_EVENTO: eventoId,
          ID_USUARIO: usuarioId,
          FECHA_ASISTENCIA: new Date(),
          ID_EVENTO_ASISTIDO: 0,
          CREATED_AT: null,
          UPDATED_AT: null,
        });
        return { status: 200, message: 'asistencia marcada', asistencia };
      }
    } catch (error) {
        console.log(error)
      return { status: 400, message: 'error al marcar asistencia', error };
    }
  }
}
