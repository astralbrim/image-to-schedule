import { Module } from '@nestjs/common';
import { ApiController } from '../controllers/api.controller';
import { ApiService } from '../services/api.service';
import { LineModule } from './line.module';
import { LineService } from '../services/line.service';

@Module({
  imports: [LineModule],
  controllers: [ApiController],
  providers: [ApiService, LineService],
})
export class ApiModule {}
