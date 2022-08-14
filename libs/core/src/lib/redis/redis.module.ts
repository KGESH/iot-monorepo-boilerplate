import { CacheModule, Global, Module } from '@nestjs/common';
import { ISecretService } from '@iot-boilerplate/core';
import { RedisService } from './redis.service';

@Global()
@Module({
  imports: [
    CacheModule.registerAsync({
      useClass: RedisService,
      inject: [ISecretService],
    }),
  ],
  exports: [CacheModule],
})
export class RedisModule {}
