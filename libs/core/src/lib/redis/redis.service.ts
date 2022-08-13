import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { createClient, RedisClientOptions, RedisClientType } from 'redis';
import { ICacheService } from './adapter';
import { RedisKeyArgument, RedisKeyValue, RedisValueArgument } from './types';

@Injectable()
export class RedisService implements ICacheService {
  client: RedisClientType;

  constructor(
    /** Todo: Add logger after */
    // private readonly logger: unknown
    private readonly config: RedisClientOptions
  ) {
    this.client = createClient(this.config) as RedisClientType;
  }

  async connect(): Promise<RedisClientType> {
    await this.client.connect();
    console.log('redis connected');
    return this.client;
  }

  async isConnected(): Promise<void> {
    const ping = await this.client.ping();
    /** Todo: Replace to Logger */
    if (ping !== 'PONG') {
      console.log('redis not connected');
      throw new InternalServerErrorException('redis not connected');
    }
  }

  async get(key: RedisKeyArgument): Promise<unknown> {
    const getResult = await this.client.get(key);
    if (!getResult) {
      console.log(`Key: ${key} not found.`);
    }

    return getResult;
  }

  async set(
    key: RedisKeyArgument,
    value: RedisValueArgument,
    config?: unknown
  ): Promise<void> {
    const setResult = await this.client.set(key, value, config);
    if (setResult !== 'OK') {
      this.throwException(`cache ${this.set.name} error: ${key} : ${value}`);
    }
  }

  async del(key: RedisKeyArgument): Promise<void> {
    const deleted = await this.client.del(key);
    if (!deleted) {
      this.throwException(`cache key: ${key} not deleted`);
    }
  }

  async setMulti(redisList: RedisKeyValue[]): Promise<void> {
    const multi = this.client.multi();

    for (const model of redisList) {
      multi.rPush(model.key, model.value);
    }

    await multi.exec();
  }

  async hGet(
    key: RedisKeyArgument,
    field: RedisKeyArgument
  ): Promise<unknown | unknown[]> {
    return await this.client.hGet(key, field);
  }

  async hGetAll(key: RedisKeyArgument): Promise<unknown | unknown[]> {
    return await this.client.hGetAll(key);
  }

  async hSet(
    key: RedisKeyArgument,
    field: RedisKeyArgument,
    value: RedisValueArgument
  ): Promise<number> {
    return await this.client.hSet(key, field, value);
  }

  async pExpire(key: RedisKeyArgument, milliseconds: number): Promise<void> {
    const expired = await this.client.pExpire(key, milliseconds);
    if (!expired) {
      this.throwException(`set expire error key: ${key}`);
    }
  }

  private throwException(error: string) {
    throw new InternalServerErrorException(error);
  }
}
