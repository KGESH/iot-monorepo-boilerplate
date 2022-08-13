import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SecretService } from './secret.service';
import { ISecretService } from './adapter';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: ['.env'] })],
  providers: [
    {
      provide: ISecretService,
      useClass: SecretService,
    },
  ],
  exports: [ISecretService],
})
export class SecretModule {}
