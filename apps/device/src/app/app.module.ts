import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { CoreModule, RedisModule } from '@iot-boilerplate/core';
import { DatabaseModule } from '@iot-boilerplate/core';

@Module({
  imports: [CoreModule, DatabaseModule, RedisModule],
  controllers: [HealthController],
})
export class AppModule {}
