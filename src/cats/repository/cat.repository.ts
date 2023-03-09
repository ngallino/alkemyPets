import { Repository } from 'typeorm';
import { Cat } from '../entity/cats-entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatsDto } from '../dto/create-cats.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entity/user.entity';
import { UserRepository } from '../../users/repository/user.repository';


@Injectable()
export class CatRepository extends Repository<Cat>{

    constructor(
        private readonly userService: UsersService,
       
        @InjectRepository(Cat)
        repository: Repository<Cat>
      ) {
        super(repository.target, repository.manager, repository.queryRunner);
      }

    async createCat(createCatsDto:CreateCatsDto ){ 
        
        const user: User = await this.userService.findOne(createCatsDto.User_Cat);
        if(!user){
            throw new NotFoundException (`User with uuid '${ createCatsDto.User_Cat }' not found`)
        }
        const cat = this.create({
            ...createCatsDto,
            ownername: user.name,
            owner: user});

        return await this.save(cat);
      
    }

    async findAll(){ 
        return this.find()  
    }

    async findOneCat(term : string){  

       const cat = await this.findOneBy({ id: term }); 
       return cat;
    }

    async deleteCat(id : string){  
        const cat = await this.findOneCat( id );
        await this.remove( cat );
    }

    async updateCat(id: string, createCatsDto:CreateCatsDto){   
        const user: User = await this.userService.findOne(createCatsDto.User_Cat);
        if(!user){
            throw new NotFoundException (`User with uuid '${ createCatsDto.User_Cat }' not found`)
        }
         const cat = await this.preload({
            id: id,
            ownername: user.name,
            owner: user
          });

          return await this.save( cat );
           
    }

}