import { Injectable, ExceptionFilter, HttpException, BadRequestException, ValidationPipe } from '@nestjs/common';
import { CreateUsersDto } from "../dto/create-users.dto";
import { Repository } from 'typeorm';
import { User } from "../entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ValidationError } from 'class-validator';
import { HttpExceptionFilter } from '../../common/filter/http-exception.filter';



@Injectable()
export class UserRepository extends Repository <User>{

    constructor(
        @InjectRepository(User)
          repository: Repository<User>
      ) {
        super(repository.target, repository.manager, repository.queryRunner);
      }
    
    async createUser(createUserDto:CreateUsersDto ){ 
      
      try{
         const user = await this.create(createUserDto);
         return await this.save(user);
      }
      catch(error){
        throw new HttpException('error', error);
      };        
    }

    async findAll(){ 
        return this.find()  
    }

    async findOneUser(term : string){  
       const user = await this.findOneBy({ uuid: term }); 
       return user;
    }

    async deleteUser(id : string){  
        const user = await this.findOneUser( id );
        await this.remove( user );
    }

    async updateUser(id: string, createUserDto:CreateUsersDto){   
         const user = await this.preload({
            uuid: id,
            ...createUserDto
          });
          await this.save( user );
          return user;
    }




}