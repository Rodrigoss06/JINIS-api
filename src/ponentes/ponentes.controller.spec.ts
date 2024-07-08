import { Test, TestingModule } from '@nestjs/testing';
import { PonentesController } from './ponentes.controller';

describe('PonentesController', () => {
  let controller: PonentesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PonentesController],
    }).compile();

    controller = module.get<PonentesController>(PonentesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
