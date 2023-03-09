import { Injectable } from '@nestjs/common';
import { CreatePostsDto } from './dto/create-posts.dto';

@Injectable()
export class PostsService {

    posts = [];

    async create(createPostDto:CreatePostsDto){
        this.posts.push(createPostDto);
        return createPostDto;
    }

    async findAll(){
        return this.posts;
    }

    async findOne(name:string){
        
        const post = await this.posts.find( post => post.title === name);
        return post;
    }
}
