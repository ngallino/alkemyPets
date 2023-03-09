import { IsInt, IsString, Min, MinLength } from "class-validator";


export class CreateDogsDto {

    @IsString()
    name: string;

    @IsInt()
    @Min(0)
    age: number;

    @MinLength(2)
    @IsString()
    color: string;

    @MinLength(2)
    @IsString()
    breed:string;


}