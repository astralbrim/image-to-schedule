import { Module } from '@nestjs/common';
import { LineModule } from '../modules/line.module';
import { ApiModule } from '../modules/api.module';

@Module({
  imports: [LineModule, ApiModule],
})
export class AppModule {}
