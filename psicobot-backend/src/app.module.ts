import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmotionsModule } from './emotions/emotions.module';

@Module({
  imports: [EmotionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
