import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Course } from "./CourseModel";

@Entity('teachers')
export class Teacher extends BaseEntity{
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
    @Column()
    profession: String;
    @Column()
    phoneNumber: String;

    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(()=> Course, (course) => course.teacher)
    courses: Course[];
}