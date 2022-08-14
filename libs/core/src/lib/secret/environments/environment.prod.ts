/** Add your production environment variables
 *
 *  at build time
 *  if build options --configuration=production
 *  auto replace file name environment.prod.ts -> environment.ts
 *  example) nx build --configuration=production
 *  */

export const environment = {
  production: true,
  API_GATEWAY_URL: 'gateway',
  API_GATEWAY_PORT: 7777,

  DEVICE_MS_URL: 'device',
  DEVICE_MS_PORT: 8000,

  DATABASE_TYPE: 'postgres',
  DATABASE_HOST: 'db',
  DATABASE_NAME: 'test',
  DATABASE_USER: 'postgres',
  DATABASE_PASSWORD: 'test',
  DATABASE_PORT: 5432,

  REDIS_HOST: 'redis',
  REDIS_PORT: 6379,

  MQTT_BROKER_URL: 'mosquitto',
};
