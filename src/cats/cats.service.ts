import { Injectable, NotFoundException, UseFilters } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpExceptionFilter } from 'src/common/filter/http-exception.filter';
import { CreateCatsDto } from './dto/create-cats.dto';
import { CatRepository } from './repository/cat.repository';

@Injectable()
export class CatsService{

  constructor(
    @InjectRepository(CatRepository)
    private readonly catRepository: CatRepository,
  ) {}

  @UseFilters(new HttpExceptionFilter())
  async createCat( createCatsDto: CreateCatsDto ) {
    return this.catRepository.createCat(createCatsDto);
  }

  @UseFilters(new HttpExceptionFilter())
  async getAll(){
    return this.catRepository.findAll()
  }

  async findOne(term: string){
    try{
      console.log(term);

      const cat =  await this.catRepository.findOneCat( term );
        if(!cat){
          throw new NotFoundException();
        }
        console.log(cat);
        
      return cat;
    } 
    catch(error){
    }
  }

  async delete ( term : string ){
    return await this.catRepository.deleteCat( term );
  }

  async update( id:string, createCatsDto:CreateCatsDto ) {
    return this.catRepository.updateCat(id, createCatsDto);
  }

}



