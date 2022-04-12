import { Module } from '@nestjs/common';
import { ApiController } from '../controllers/api.controller';
import { AppService } from '../sercices/app.service';

@Module({
  imports: [],
  controllers: [ApiController],
  providers: [AppService],
})
export class AppModule {}
