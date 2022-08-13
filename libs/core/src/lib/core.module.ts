import { Global, Module } from '@nestjs/common';
import { SecretModule } from './secret/secret.module';

@Global()
@Module({
  imports: [SecretModule],
  exports: [SecretModule],
})
export class CoreModule {}
