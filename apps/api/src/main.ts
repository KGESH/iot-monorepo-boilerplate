import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ISecretService } from '@iot-boilerplate/core';
import { buildSwagger } from './utils/swagger/builder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const secretService = app.get(ISecretService);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = secretService.API_GATEWAY_PORT || 3333;
  const url = secretService.API_GATEWAY_URL || 'localhost';

  buildSwagger(app);
  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://${url}:${port}/${globalPrefix}`
  );
}

bootstrap();
