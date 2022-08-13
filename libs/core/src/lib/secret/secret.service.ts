import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ISecretService } from './adapter';
import {
  API_GATEWAY_ENV,
  DATABASE_ENV,
  DEVICE_MS_ENV,
  REDIS_ENV,
} from './enum';

@Injectable()
export class SecretService extends ConfigService implements ISecretService {
  constructor() {
    super();
  }

  API_GATEWAY_URL = this.get<string>(API_GATEWAY_ENV.URL);
  API_GATEWAY_PORT = this.get<number>(API_GATEWAY_ENV.PORT);

  DEVICE_MS_URL = this.get<string>(DEVICE_MS_ENV.URL);
  DEVICE_MS_PORT = this.get<number>(DEVICE_MS_ENV.PORT);

  DATABASE_TYPE = this.get<string>(DATABASE_ENV.DATABASE_TYPE, 'postgres');
  DATABASE_HOST = this.get<string>(DATABASE_ENV.DATABASE_HOST);
  DATABASE_NAME = this.get<string>(DATABASE_ENV.DATABASE_NAME);
  DATABASE_PASSWORD = this.get<string>(DATABASE_ENV.DATABASE_PASSWORD);
  DATABASE_PORT = this.get<number>(DATABASE_ENV.DATABASE_PORT);
  DATABASE_USER = this.get<string>(DATABASE_ENV.DATABASE_USER);

  REDIS_HOST = this.get<string>(REDIS_ENV.REDIS_HOST);
  REDIS_PORT = this.get<number>(REDIS_ENV.REDIS_PORT);

  REDIS_URL = this.get<string>(REDIS_ENV.REDIS_URL);
}
