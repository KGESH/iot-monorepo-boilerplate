import { Injectable } from '@nestjs/common';
import { ISecretService } from '@iot-boilerplate/core';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class ConnectionService implements TypeOrmOptionsFactory {
  constructor(private readonly secretService: ISecretService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const databaseConnection: TypeOrmModuleOptions = {
      type: 'postgres', // Todo: Fix type
      host: this.secretService.DATABASE_HOST,
      database: this.secretService.DATABASE_NAME,
      username: this.secretService.DATABASE_USER,
      password: this.secretService.DATABASE_PASSWORD,
      port: this.secretService.DATABASE_PORT,

      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    };

    console.log(`Connection: `, databaseConnection);
    return databaseConnection;
  }
}
