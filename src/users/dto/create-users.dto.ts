import { IsEmail, IsInt, IsOptional, IsString, Min, MinLength } from "class-validator";
import { Unique } from "typeorm";
import { Cat } from '../../cats/entity/cats-entity';
import { CreateCatsDto } from '../../cats/dto/create-cats.dto';


export class CreateUsersDto {

    @IsString()
    name: string;

    @MinLength(2)
    @IsString()
    username:string;

    @MinLength(2)
    @IsEmail()
    mail: string;
}