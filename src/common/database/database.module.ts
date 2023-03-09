import { Global, Module, Post } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from 'src/cats/entity/cats-entity';
import { Dog } from 'src/dogs/entity/dogs.entity';
import { User } from '../../users/entity/user.entity';

@Global() 
@Module({ 
    imports: [
        TypeOrmModule.forRootAsync({
             useFactory: () => ({ 
                type: 'mysql', 
                host: 'localhost', 
                port: 3306, 
                username: 'root',
                password: 'root', 
                database: 'mascotapp', 
                entities: [Cat, User, Dog], 
                synchronize: true, 
                keepConnectionAlive: true, 
                retryAttempts: 2, 
                retryDelay: 1000, 
            }), 
        }),
    ], 
}) 

    export class DatabaseModule { }
