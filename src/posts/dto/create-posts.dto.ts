import { IsInt, IsString, Min, MinLength } from "class-validator";


export class CreatePostsDto {

    @IsString()
    title: string;

    @IsInt()
    @Min(0)
    id: number;

    @MinLength(2)
    @IsString()
    content: string;

    @IsInt()
    @Min(0)
    userId:number;


}