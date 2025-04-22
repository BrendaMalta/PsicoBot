import { Injectable } from '@nestjs/common';
import { CreateEmotionDto } from './dto/create-emotion.dto';
import { UpdateEmotionDto } from './dto/update-emotion.dto';
import { EmotionType } from './emotionstype.enum';

@Injectable()
export class EmotionsService {
  private emotions: CreateEmotionDto[] = [];

  private predefinedEmotions = Object.keys(EmotionType).map(key => EmotionType[key]);

  create(createEmotionDto: CreateEmotionDto) {
    this.emotions.push(createEmotionDto);
    return 'Emoção adicionada com sucesso!';
  }

  findAll() {
    return this.emotions;
  }

  getEmotionsList() {
    return this.predefinedEmotions;
  }

  


  // findOne(id: number) {
  //   return `This action returns a #${id} emotion`;
  // }

  // update(id: number, updateEmotionDto: UpdateEmotionDto) {
  //   return `This action updates a #${id} emotion`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} emotion`;
  // }
}
