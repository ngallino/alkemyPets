import { Module } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { DogRepository } from './repository/dog.repository';

@Module({
  controllers: [DogsController],
  providers: [DogsService, DogRepository],
  exports: [DogsService]
})
export class DogsModule {}
