import { IsString, Min, Max, IsNumber, IsOptional, IsNotEmpty, IsEnum} from 'class-validator';
import { Emotion } from '../entities/emotion.entity';

export class CreateEmotionDto {
    @IsEnum(Emotion)
    feeling: Emotion;

    @IsNumber()
    @Min(1) @Max(5)
    intensity: number;

    @IsString()
    @IsOptional()
    note: string;
}
