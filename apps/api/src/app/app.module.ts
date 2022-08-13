import { Module } from '@nestjs/common';
import {
  DatabaseModule,
  CoreModule,
  MicroserviceRequestModule,
  RedisModule,
} from '@iot-boilerplate/core';
import { HealthController } from './health.controller';

@Module({
  imports: [CoreModule, DatabaseModule, RedisModule, MicroserviceRequestModule],
  controllers: [HealthController],
})
export class AppModule {}
