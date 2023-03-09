import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePostsDto } from './dto/create-posts.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor( private readonly postService: PostsService){}

    @Get()
    findAll(){
        return this.postService.findAll();
    }

    @Get(':name')
    findOne(@Param('name') name:string){
        return this.postService.findOne(name);
    }

    @Post()
    create(@Body() createPostsDto: CreatePostsDto){
        return this.postService.create(createPostsDto);
    }
    
}
