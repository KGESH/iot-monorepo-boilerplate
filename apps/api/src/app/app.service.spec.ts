import { Test } from '@nestjs/testing';
import { AppService } from './app.service';
import { CACHE_MANAGER } from '@nestjs/common';

const mockCacheManager = {
  get: jest.fn(),
  set: jest.fn(),
};

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: CACHE_MANAGER,
          useValue: mockCacheManager,
        },
      ],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('define', () => {
    it('should be define', async () => {
      await expect(service).toBeDefined();
    });
  });
});
