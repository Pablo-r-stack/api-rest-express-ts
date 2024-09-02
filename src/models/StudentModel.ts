import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity('students')
export class Student extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    dni: String;
    @Column()
    name: String;
    @Column()
    lastName: String;
    @Column()
    email: String;

    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
}