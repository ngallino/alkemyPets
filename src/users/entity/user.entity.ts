import { Cat } from 'src/cats/entity/cats-entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable, Unique } from 'typeorm';
import { MinLength, Min, Length } from 'class-validator';


@Entity()
export class User{

        @PrimaryGeneratedColumn('uuid')
        uuid: string;
    
        @Column('text')
        name: string;
    
        @Column({unique : true})
        @Length(2, 30, { message: 'The mail must be at least 2 but not longer than 30 characters' })
        mail: string;
    
        @Column({ unique:true})
        @Length(2, 30, { message: 'The username must be at least 2 but not longer than 30 characters' })     
        username:string;
        
        @OneToMany(() => Cat, (cat) => cat.id)
        cats: Cat[];

}