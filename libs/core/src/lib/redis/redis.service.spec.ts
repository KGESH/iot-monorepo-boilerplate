import { Test } from '@nestjs/testing';
import { ICacheService } from './adapter';
import { RedisService } from './redis.service';

describe('ICacheService', () => {
  let service: ICacheService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [
        {
          provide: ICacheService,
          useFactory: (config: { url: `redis:redis:0000` }) =>
            new RedisService(config),
        },
      ],
    }).compile();

    service = app.get<ICacheService>(ICacheService);
  });

  describe('connect', () => {
    it('should connect success', async () => {
      await expect(service.connect()).toEqual('');
    });
  });
});
