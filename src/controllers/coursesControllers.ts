import { Request, Response } from "express";
import { Course } from "../models/CourseModel";
import { Teacher } from "../models/TeacherModel";
import { Student } from "../models/StudentModel";


class CoursesController {
    constructor() {

    }
    //crud controllers
    async getAll(req: Request, res: Response) {
        try {
            const data = await Course.find({relations: {teacher: true, students: true}});
            res.status(200).json(data);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message)
            }
        }
    }

    //getById
    async getById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await Course.findOne({where: { id: Number(id) }, relations: {teacher: true, students: true}});
            if (!data) {
                throw new Error('Course not found;')
            }
            res.status(200).json(data);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message)
            }
        }
    }

    //create
    async create(req: Request, res: Response) {
        try {
            const { teacher } = req.body
            const teacherCourse = await Teacher.findOneBy({ id: Number(teacher) });
            if (!teacherCourse) {
                throw new Error('Teacher is missing, cannot create Course')
            }
            console.log('trying to save', req.body);

            const course = await Course.save(req.body)
            res.status(201).json(course);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message)
            }
        }
    }

    //update
    async update(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const { teacher } = req.body
            const teacherCourse = await Teacher.findOneBy({ id: Number(teacher) });
            if (!teacherCourse) {
                throw new Error('invalid teacher, cannot update Course')
            }
            const course = await Course.findOne({where: { id: Number(id) }, relations: {teacher: true, students: true}});
            if (!course) {
                throw new Error('Course not found')
            }
            await Course.update({ id: Number(id) }, req.body);
            const courseUpdated = await Course.findOneBy({ id: Number(id) });
            res.status(200).json(courseUpdated);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message)
            }
        }
    }

    //delete
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const course = await Course.findOneBy({ id: Number(id) });
            if (!course) {
                throw new Error('Course not found');
            }
            await Course.delete({ id: Number(id) });
            res.status(204).json({ message: 'Course deleted' });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message)
            }
        }
    }

    async addStudent(req: Request, res: Response){
        const { id } = req.params;
        try {
            const { student_id, course_id } = req.body;
            const student = await Student.findOneBy({id: Number(student_id)});
            const course = await Course.findOneBy({id: Number(course_id)});
            if(!student){
                throw new Error('Student not found');
            }
            if(!course){
                throw new Error('Course not found');
            }

            course.students = course.students || [];
            course.students.push(student);

            const data = await Course.save(course);

            res.status(200).json(data);

        } catch (error) {
            
        }
    }
}

export default new CoursesController();