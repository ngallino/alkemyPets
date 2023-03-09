import { User } from "src/users/entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cat{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('int')
    age: number;

    @Column('text')
    color: string;
    
    @Column('text')
    breed: string;

    @Column('text')
    ownername: string;

    @ManyToOne(() => User, (user) => user.uuid, {eager:true, onDelete:'CASCADE'})
    owner: User;

}