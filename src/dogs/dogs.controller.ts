import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateDogsDto } from './dto/create-dogs.dto';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {

    constructor(private readonly dogService : DogsService){}
    
    @Post()
    create(@Body() createDogsDto: CreateDogsDto){
        return this.dogService.createDog(createDogsDto);
    }

    @Get()
    findAll(){
        return this.dogService.getAll();
    }

    @Get(':term')
    findOne(@Param('term') term: string) {
        return this.dogService.findOne(term);
    }

  
    @Delete(':term')
    delete (@Param('term') term : string ){
        return this.dogService.delete(term);
    } 

    @Patch(':id')
    update(@Param('id') id:string, createDogsDto: CreateDogsDto ) {
        return this.dogService.update(id, createDogsDto);
    }
    
}
