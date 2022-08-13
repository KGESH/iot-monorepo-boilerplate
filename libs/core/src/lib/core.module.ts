import { Module } from '@nestjs/common';
import { SecretModule } from './secret/secret.module';

@Module({
  imports: [SecretModule],
  exports: [SecretModule],
})
export class CoreModule {}
