import { Test, TestingModule } from '@nestjs/testing';
import { ParticipantesService } from './usuarios.service';

describe('ParticipantesService', () => {
  let service: ParticipantesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParticipantesService],
    }).compile();

    service = module.get<ParticipantesService>(ParticipantesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
