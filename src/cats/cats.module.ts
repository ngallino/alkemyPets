import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { CatRepository } from './repository/cat.repository';
import { Cat } from './entity/cats-entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cat, CatRepository]),
    UsersModule
  ],
  providers: [CatsService, CatRepository],
  controllers: [CatsController],
  exports: [CatsService, TypeOrmModule],
})
export class CatsModule {}
