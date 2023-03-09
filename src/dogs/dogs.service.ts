import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDogsDto } from './dto/create-dogs.dto';
import { DogRepository } from './repository/dog.repository';

@Injectable()
export class DogsService {

   
  constructor(
    @InjectRepository(DogRepository)
    private readonly dogRepository: DogRepository,
  ) {}

  async createDog( createDogDto: CreateDogsDto ) {
    return this.dogRepository.createDog(createDogDto);
  }

  async getAll(){
    return this.dogRepository.findAll()
  }

  async findOne(term: string){
    try{
      const dog =  await this.dogRepository.findOneDog( term );
        if(!!dog){
          throw new NotFoundException();
        }
      return dog;
    } 
    catch(error){
    }
  }

  async delete ( term : string ){
    return await this.dogRepository.deleteDog( term );
  }

  async update( id:string, createDogsDto: CreateDogsDto ) {
    return this.dogRepository.updateDog(id, createDogsDto);
  }
}
