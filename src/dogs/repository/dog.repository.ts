import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateDogsDto } from "../dto/create-dogs.dto";
import { Dog } from "../entity/dogs.entity";



@Injectable()
export class DogRepository extends Repository <Dog>{
    
    async createDog( createDogDto:CreateDogsDto ){ 
        const dog = await this.create(createDogDto);
        return await this.save(dog);
    }

    async findAll(){ 
        return this.find()  
    }

    async findOneDog(term : string){  
       const dog = await this.findOneBy({ id: term }); 
       return dog;
    }

    async deleteDog(id : string){  
        const dog = await this.findOneDog( id );
        await this.remove( dog );
    }

    async updateDog(id: string, createDogDto:CreateDogsDto){   
         const dog = await this.preload({
            id: id,
            ...createDogDto
          });
          await this.save( dog );
          return dog;
    }




}