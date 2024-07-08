import { Test, TestingModule } from '@nestjs/testing';
import { TiposParticipantesController } from './tipos-participantes.controller';

describe('TiposParticipantesController', () => {
  let controller: TiposParticipantesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposParticipantesController],
    }).compile();

    controller = module.get<TiposParticipantesController>(TiposParticipantesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
