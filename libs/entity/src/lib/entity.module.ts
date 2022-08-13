import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Master } from './domain/device/master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Master])],
  exports: [TypeOrmModule],
})
export class EntityModule {}
