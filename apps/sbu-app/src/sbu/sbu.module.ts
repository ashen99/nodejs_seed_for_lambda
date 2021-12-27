import { Module } from '@nestjs/common';
import { SbuService } from './sbu.service';
import { SbuResolver } from './sbu.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sbu } from './entities/sbu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sbu])],
  providers: [SbuResolver, SbuService],
})
export class SbuModule {}
