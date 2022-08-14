import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ISecretService } from '@iot-boilerplate/core';
import { environment } from '@iot-boilerplate/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'device';

  app.setGlobalPrefix(globalPrefix);
  const secretService = app.get(ISecretService);
  const port = secretService.DEVICE_MS_PORT || 4444;
  const url = secretService.DEVICE_MS_URL || 'localhost';
  await app.listen(port);

  console.log(`device dir envs:`, { ...environment });

  Logger.log(
    `🚀 Application is ${process.env.NODE_ENV}running ${url} on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
