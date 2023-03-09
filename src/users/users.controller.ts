import { BadRequestException, Body, Controller, Delete, ForbiddenException, Get, HttpException, HttpStatus, Param, Patch, Post, UseFilters } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { HttpExceptionFilter } from 'src/common/filter/http-exception.filter';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}

    @Post()
    create(@Body() createUserDto: CreateUsersDto){    
        return this.userService.createUser(createUserDto);
    }
        
    @Get()
    findAll(){
        return this.userService.getAll();
    }

    @Get(':term')
    findOne(@Param('term') term: string) {
        return this.userService.findOne(term);
    }

  
    @Delete(':term')
    delete (@Param('term') term : string ){
        return this.userService.delete(term);
    } 

    @Patch(':id')
    update(@Param('id') id:string, @Body() createUserDto: CreateUsersDto ) {
        return this.userService.update(id, createUserDto);
    }
    
}
