import { Test, TestingModule } from '@nestjs/testing';
import { EventosAsistidosService } from './eventos-asistidos.service';

describe('EventosAsistidosService', () => {
  let service: EventosAsistidosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventosAsistidosService],
    }).compile();

    service = module.get<EventosAsistidosService>(EventosAsistidosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
