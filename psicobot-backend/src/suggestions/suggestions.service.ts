import { Injectable } from '@nestjs/common';
import { CreateSuggestionDto } from './dto/create-suggestion.dto';
import { UpdateSuggestionDto } from './dto/update-suggestion.dto';

@Injectable()
export class SuggestionsService {
  private suggestions: CreateSuggestionDto[] = [];
  emotion: any;

  create(createSuggestionDto: CreateSuggestionDto) {
    this.suggestions.push(createSuggestionDto);
    return 'Sugestão adicionada com sucesso!';

  }

  findAll() {
    return this.suggestions;
  }

  findOne(id: number) {
    return `This action returns a #${id} suggestion`;
  }

  
  findByEmotion(emotion: string) {
    return this.suggestions.filter(
      (suggestion) => suggestion.emotion_related.toLowerCase() === emotion.toLowerCase()
    );
  }



  update(id: number, updateSuggestionDto: UpdateSuggestionDto) {
    return `This action updates a #${id} suggestion`;
  }

  remove(id: number) {
    return `This action removes a #${id} suggestion`;
  }
}
