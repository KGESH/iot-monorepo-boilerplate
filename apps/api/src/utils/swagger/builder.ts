import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { SWAGGER_TAG } from './enum';

export const buildSwagger = (app: INestApplication): void => {
  const options = new DocumentBuilder()
    .setTitle('IoT Device MicroService')
    .setDescription('IoT Device MicroService 문서입니다')
    .setVersion('1.0.0')
    .addTag(SWAGGER_TAG.MASTER)
    .addTag(SWAGGER_TAG.SLAVE)
    .addTag(SWAGGER_TAG.THERMOMETER)
    .addTag(SWAGGER_TAG.WATER_PUMP)
    .addTag(SWAGGER_TAG.LED)
    .build();

  const swaggerCustomOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
  };

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('ms-spec', app, document, swaggerCustomOptions);
};
