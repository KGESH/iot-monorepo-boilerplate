import { Module } from '@nestjs/common';
import { CoreModule } from '@iot-boilerplate/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from '@iot-boilerplate/core';

@Module({
  imports: [CoreModule, RedisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
