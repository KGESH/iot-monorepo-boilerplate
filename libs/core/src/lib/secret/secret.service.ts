import { Injectable } from '@nestjs/common';
import { ISecretService } from './adapter';
import { environment } from '@iot-boilerplate/core';

@Injectable()
export class SecretService implements ISecretService {
  /** API Gateway */
  API_GATEWAY_URL = environment.API_GATEWAY_URL;
  API_GATEWAY_PORT = environment.API_GATEWAY_PORT;

  /** Device Microservice */
  DEVICE_MS_URL = environment.DEVICE_MS_URL;
  DEVICE_MS_PORT = environment.DEVICE_MS_PORT;

  /** Database */
  DATABASE_TYPE = environment.DATABASE_TYPE;
  DATABASE_HOST = environment.DATABASE_HOST;
  DATABASE_NAME = environment.DATABASE_NAME;
  DATABASE_PASSWORD = environment.DATABASE_PASSWORD;
  DATABASE_PORT = environment.DATABASE_PORT;
  DATABASE_USER = environment.DATABASE_USER;

  /** Cache */
  REDIS_HOST = environment.REDIS_HOST;
  REDIS_PORT = environment.REDIS_PORT;

  /** MQTT Broker */
  MQTT_BROKER_URL = environment.MQTT_BROKER_URL;
}
