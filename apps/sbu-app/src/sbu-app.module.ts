import { Module } from '@nestjs/common';
import { SbuAppController } from './sbu-app.controller';
import { SbuAppService } from './sbu-app.service';

@Module({
  imports: [],
  controllers: [SbuAppController],
  providers: [SbuAppService],
})
export class SbuAppModule {}
