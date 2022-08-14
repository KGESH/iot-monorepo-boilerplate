import { Module } from '@nestjs/common';
import { SecretService } from './secret.service';
import { ISecretService } from './adapter';

@Module({
  providers: [
    {
      provide: ISecretService,
      useClass: SecretService,
    },
  ],
  exports: [ISecretService],
})
export class SecretModule {}
