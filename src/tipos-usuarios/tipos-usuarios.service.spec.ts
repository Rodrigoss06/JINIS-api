import { Test, TestingModule } from '@nestjs/testing';
import { TiposParticipantesService } from './tipos-usuarios.service';

describe('TiposParticipantesService', () => {
  let service: TiposParticipantesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposParticipantesService],
    }).compile();

    service = module.get<TiposParticipantesService>(TiposParticipantesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
