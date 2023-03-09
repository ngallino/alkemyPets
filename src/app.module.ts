import { Module } from '@nestjs/common';
import { DogsModule } from './dogs/dogs.module';
import { CatsModule } from './cats/cats.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './common/database/database.module';

@Module({
  imports: [
     DatabaseModule,
     DogsModule, 
     CatsModule, 
     PostsModule, 
     UsersModule],

})
export class AppModule {}
