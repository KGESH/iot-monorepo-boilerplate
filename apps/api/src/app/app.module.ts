import { Module } from '@nestjs/common';
import { DatabaseModule, CoreModule } from '@iot-boilerplate/core';
import { HealthController } from './health.controller';
import { RedisModule } from '@iot-boilerplate/core';

@Module({
  imports: [CoreModule, DatabaseModule, RedisModule],
  controllers: [HealthController],
})
export class AppModule {}
