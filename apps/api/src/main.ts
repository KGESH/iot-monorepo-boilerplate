/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { ISecretService } from '@iot-boilerplate/core';
import { buildSwagger } from './utils/swagger/builder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const secretService = app.get(ISecretService);

  const port = secretService.API_GATEWAY_PORT || process.env.PORT || 3333;
  const url = secretService.API_GATEWAY_URL;
  buildSwagger(app);
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://${url}:${port}/${globalPrefix}`
  );
}

bootstrap();
