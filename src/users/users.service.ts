import { Injectable, NotFoundException, UseFilters } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throwError } from 'rxjs';
import { HttpExceptionFilter } from 'src/common/filter/http-exception.filter';
import { CreateUsersDto } from './dto/create-users.dto';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserRepository)
        public readonly userRepository: UserRepository,
      ) {}
    
      @UseFilters(new HttpExceptionFilter())
      async createUser( createUserDto: CreateUsersDto ) {
        try{ return this.userRepository.createUser(createUserDto);}
        catch(error){
          throwError;
        };
        
      }
    
      @UseFilters(new HttpExceptionFilter())
      async getAll(){
        return this.userRepository.findAll();
      }
    
      async findOne(term: string){
        try{
          const user =  await this.userRepository.findOneUser( term );
          if(!user){
              throw new NotFoundException();
          }
          return user;
        } 
        catch(error){
        }
      }
    
      async delete ( term : string ){
        const deleted = await this.userRepository.deleteUser( term );
        return `User with id ${term}, and all asociated pets deleted.`
      }
    
      async update( id:string, createUserDto: CreateUsersDto ) {
        const updated = this.userRepository.updateUser(id, createUserDto);
        return `User with id ${id}, and all asociated pets deleted.`
      }
}
