import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async setData(key: string, value: string) {
    return this.cacheManager.set<string>(key, value, { ttl: 360000 });
  }

  async getData(key: string): Promise<string> {
    return this.cacheManager.get<string>(key);
  }
}
