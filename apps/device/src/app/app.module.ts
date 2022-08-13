import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { CoreModule, RedisModule } from '@iot-boilerplate/core';
import { DatabaseModule } from '@iot-boilerplate/core';
import { MqttBrokerModule } from './mqtt/mqtt.module';

@Module({
  imports: [CoreModule, DatabaseModule, RedisModule, MqttBrokerModule],
  controllers: [HealthController],
})
export class AppModule {}
