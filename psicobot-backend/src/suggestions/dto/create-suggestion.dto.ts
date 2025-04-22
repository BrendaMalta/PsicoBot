import { IsString, IsOptional, IsNotEmpty} from 'class-validator';

export class CreateSuggestionDto {
    @IsString()
    @IsNotEmpty()  
    emotion_related: string;   //nao esquecer de mudar para id quando tiver o banco 

    @IsString()
    @IsNotEmpty()
    self_care_suggestion: string;

    @IsString()
    @IsOptional()
    suggestion_type: string; //Tipo de sugestão (ex: "atividade", "relaxamento")

    //emocao_relacionada, sugestao_autocuidado e tipo_sugestao.


}
