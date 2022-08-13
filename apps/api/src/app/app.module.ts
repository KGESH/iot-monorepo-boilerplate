import { Module } from '@nestjs/common';
import { CoreModule } from '@iot-boilerplate/core';
import { HealthController } from './healthController';
import { RedisModule } from '@iot-boilerplate/core';

@Module({
  imports: [CoreModule, RedisModule],
  controllers: [HealthController],
})
export class AppModule {}
