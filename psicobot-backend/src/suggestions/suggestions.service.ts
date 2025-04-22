import { Injectable } from '@nestjs/common';
import { CreateSuggestionDto } from './dto/create-suggestion.dto';
import { UpdateSuggestionDto } from './dto/update-suggestion.dto';

@Injectable()
export class SuggestionsService {
  private suggestions: CreateSuggestionDto[] = [];

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

  update(id: number, updateSuggestionDto: UpdateSuggestionDto) {
    return `This action updates a #${id} suggestion`;
  }

  remove(id: number) {
    return `This action removes a #${id} suggestion`;
  }
}
