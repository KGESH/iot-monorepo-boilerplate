export type RedisKeyArgument = string | Buffer;
export type RedisValueArgument = string | Buffer;

export type RedisKeyValue = {
  key: RedisKeyArgument;
  value: RedisValueArgument;
};
