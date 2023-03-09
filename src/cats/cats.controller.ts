import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Query, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/filter/http-exception.filter';
import { CatsService } from './cats.service';
import { CreateCatsDto } from './dto/create-cats.dto';

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) {}

    @Post()
    create(@Body() createCatsDto: CreateCatsDto){
        return this.catsService.createCat(createCatsDto);
    }

    @Get()
    findAll(){
        return this.catsService.getAll();
    }

    @Get(':term')
    findOne(@Param('term', ParseUUIDPipe) term: string) {
        console.log(term);
        return this.catsService.findOne(term);
    }

  
    @Delete(':term')
    delete (@Param('term') term : string ){
        return this.catsService.delete(term);
    } 

    @Patch(':id')
    update(@Param('id') id:string, @Body()createCatsDto: CreateCatsDto ) {
        return this.catsService.update(id, createCatsDto);
    }

}
