import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ISecretService } from '@iot-boilerplate/core';
import { MQTT_TOKEN } from './enum';
import { MqttService } from './mqtt.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: MQTT_TOKEN.DEVICE_BROKER,
        inject: [ISecretService],
        useFactory: ({ MQTT_BROKER_URL }: ISecretService) => ({
          transport: Transport.MQTT,
          options: { url: MQTT_BROKER_URL },
        }),
      },
    ]),
  ],
  providers: [MqttService],
  exports: [ClientsModule, MqttService],
})
export class MqttBrokerModule {}
