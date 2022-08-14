import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MQTT_TOKEN } from './enum';

@Injectable()
export class MqttService {
  constructor(
    @Inject(MQTT_TOKEN.DEVICE_BROKER)
    private readonly broker: ClientProxy
  ) {}

  async publish(topic: string, payload: unknown): Promise<void> {
    this.broker.emit(topic, payload);
  }
}
