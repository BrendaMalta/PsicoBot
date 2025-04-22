import { IsString, IsOptional, IsNotEmpty, IsEnum} from 'class-validator';
import { EmotionType } from 'src/emotions/emotionstype.enum';

export class CreateSuggestionDto {
    @IsEnum(EmotionType)   
    emotion_related: EmotionType;
    
    @IsString()
    @IsNotEmpty()
    self_care_suggestion: string;

    @IsString()
    @IsOptional()
    suggestion_type: string; //Tipo de sugestão (ex: "atividade", "relaxamento")

}
