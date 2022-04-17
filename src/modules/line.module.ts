import { Module } from '@nestjs/common';
import { LineService } from '../sercices/line.service';
import { LineController } from '../controllers/line.controller';

@Module({
  controllers: [LineController],
  exports: [LineService],
  providers: [LineService],
})
export class LineModule {}
