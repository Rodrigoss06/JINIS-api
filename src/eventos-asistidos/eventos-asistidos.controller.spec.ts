import { Test, TestingModule } from '@nestjs/testing';
import { EventosAsistidosController } from './eventos-asistidos.controller';

describe('EventosAsistidosController', () => {
  let controller: EventosAsistidosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventosAsistidosController],
    }).compile();

    controller = module.get<EventosAsistidosController>(EventosAsistidosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
