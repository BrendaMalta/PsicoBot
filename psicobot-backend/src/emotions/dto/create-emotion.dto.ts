import { IsString, Min, Max, IsNumber, IsOptional, IsNotEmpty, IsEnum} from 'class-validator';
import { EmotionType } from '../emotionstype.enum';


export class CreateEmotionDto {
    @IsEnum(EmotionType, { message: 'feeling must be one of the following values:Triste, Feliz, Ansioso, Raiva, Medo, Surpreso'})
    feeling: EmotionType;

    @IsNumber()
    @Min(1) @Max(5)
    intensity: number;

    @IsString()
    @IsOptional()
    note: string;
}
