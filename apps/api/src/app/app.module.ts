import { Module } from '@nestjs/common';
import {
  CoreModule,
  MicroserviceRequestModule,
  RedisModule,
} from '@iot-boilerplate/core';
import { HealthController } from './health.controller';

@Module({
  imports: [CoreModule, RedisModule, MicroserviceRequestModule],
  controllers: [HealthController],
})
export class AppModule {}
