import {
  API_GATEWAY_ENV,
  DATABASE_ENV,
  DEVICE_MS_ENV,
  MQTT_ENV,
  REDIS_ENV,
} from './enum';
import { DatabaseType } from 'typeorm';

export abstract class ISecretService {
  /** API Gateway */
  API_GATEWAY_URL: API_GATEWAY_ENV | string;
  API_GATEWAY_PORT: API_GATEWAY_ENV | string | number;

  /** Device Microservice */
  DEVICE_MS_URL: DEVICE_MS_ENV | string;
  DEVICE_MS_PORT: DEVICE_MS_ENV | string | number;

  /** Database */
  DATABASE_TYPE: DATABASE_ENV | DatabaseType | string;
  DATABASE_HOST: DATABASE_ENV | string;
  DATABASE_NAME: DATABASE_ENV | string;
  DATABASE_USER: DATABASE_ENV | string;
  DATABASE_PASSWORD: DATABASE_ENV | string;
  DATABASE_PORT: DATABASE_ENV | string | number;

  /** Cache */
  REDIS_HOST: REDIS_ENV | string;
  REDIS_PORT: REDIS_ENV | string | number;

  /** MQTT Broker */
  MQTT_BROKER_URL: MQTT_ENV | string;
}
