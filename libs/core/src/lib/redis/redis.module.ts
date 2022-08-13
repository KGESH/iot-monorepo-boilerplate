import { Global, Module } from '@nestjs/common';
import { ICacheService } from './adapter';
import { ISecretService } from '@iot-boilerplate/core';
import { RedisService } from './redis.service';

@Global()
@Module({
  providers: [
    {
      provide: ICacheService,
      inject: [ISecretService],
      useFactory: async ({ REDIS_URL }: ISecretService) => {
        const cacheService = new RedisService({ url: REDIS_URL });
        await cacheService.connect();
        return cacheService;
      },
    },
  ],
  exports: [ICacheService],
})
export class RedisModule {}
