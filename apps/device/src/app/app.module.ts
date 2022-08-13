import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from '@iot-boilerplate/core';
import { ConnectionModule } from '@iot-boilerplate/core';

@Module({
  imports: [CoreModule, ConnectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
