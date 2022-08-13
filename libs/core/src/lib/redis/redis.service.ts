import {
  CacheModuleOptions,
  CacheOptionsFactory,
  Injectable,
} from '@nestjs/common';
import * as redisStore from 'cache-manager-ioredis';
import { ISecretService } from '@iot-boilerplate/core';

@Injectable()
export class RedisService implements CacheOptionsFactory {
  constructor(private secretService: ISecretService) {}

  createCacheOptions(): CacheModuleOptions {
    const options: CacheModuleOptions = {
      store: redisStore,
      host: this.secretService.REDIS_HOST,
      port: this.secretService.REDIS_PORT,
    };
    console.log(options);

    return options;
  }
}
