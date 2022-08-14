/** Add your development environment variables here
 *
 *  if you create new app
 *  replace /apps/your app name/project.json -> "fileReplacements" path
 *  you can customize your own env path
 *
 *  @Before
 *  "fileReplacements": [
 *                 {
 *                   "replace": "apps/your app name/src/environments/environment.ts",
 *                   "with": "apps/your app name/src/environments/environment.prod.ts"
 *                 }
 *               ]
 *
 *
 *  @After
 * "fileReplacements": [
 *             {
 *               "replace": "libs/core/src/lib/secret/environments/environment.ts",
 *               "with": "libs/core/src/lib/secret/environments/environment.prod.ts"
 *             }
 *           ]
 * */

export const environment = {
  production: false,
  API_GATEWAY_URL: '0.0.0.0',
  API_GATEWAY_PORT: 7777,

  DEVICE_MS_URL: '0.0.0.0',
  DEVICE_MS_PORT: 8000,

  DATABASE_TYPE: 'postgres',
  DATABASE_HOST: '0.0.0.0',
  DATABASE_NAME: 'test',
  DATABASE_USER: 'postgres',
  DATABASE_PASSWORD: 'test',
  DATABASE_PORT: 5432,

  REDIS_HOST: '0.0.0.0',
  REDIS_PORT: 6379,

  MQTT_BROKER_URL: 'mqtt://0.0.0.0:1883',
};
