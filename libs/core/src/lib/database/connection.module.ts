import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecretModule } from '../secret/secret.module';
import { ISecretService } from '@iot-boilerplate/core';
import { ConnectionService } from './connection.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [SecretModule],
      inject: [ISecretService],
      useClass: ConnectionService,
    }),
  ],
})
export class ConnectionModule {}
