import { DataSource } from "typeorm";
import { Student } from "../models/StudentModel";
import { Teacher } from "../models/TeacherModel";
import { Course } from "../models/CourseModel";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "demots",
    logging: true,
    entities:[Student, Teacher, Course],
    synchronize: true,
});