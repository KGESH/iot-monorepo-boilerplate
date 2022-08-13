import { RedisClientType } from 'redis';
import { RedisKeyArgument, RedisKeyValue, RedisValueArgument } from './types';

export abstract class ICacheService {
  abstract client: RedisClientType;

  abstract isConnected(): Promise<void>;

  abstract connect(): Promise<RedisClientType>;

  abstract get(key: RedisKeyArgument): Promise<unknown>;

  abstract set(
    key: RedisKeyArgument,
    value: RedisValueArgument,
    config?: unknown
  ): Promise<void>;

  abstract del(key: RedisKeyArgument): Promise<void>;

  abstract setMulti(redisList: RedisKeyValue[]): Promise<void>;

  abstract pExpire(key: RedisKeyArgument, milliseconds: number): Promise<void>;

  abstract hGet(
    key: RedisKeyArgument,
    field: RedisKeyArgument
  ): Promise<unknown | unknown[]>;

  abstract hSet(
    key: RedisKeyArgument,
    field: RedisKeyArgument,
    value: RedisValueArgument
  ): Promise<number>;

  abstract hGetAll(key: RedisKeyArgument): Promise<unknown | unknown[]>;
}
