import { Module } from '@nestjs/common';
import { LineModule } from './line.module';
import { ApiModule } from './api.module';

@Module({
  imports: [LineModule, ApiModule],
})
export class AppModule {}
