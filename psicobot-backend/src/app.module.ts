import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmotionsModule } from './emotions/emotions.module';
import { SuggestionsModule } from './suggestions/suggestions.module';

@Module({
  imports: [EmotionsModule, SuggestionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
