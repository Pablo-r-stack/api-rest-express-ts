import { Request, Response } from "express";
import { Teacher } from './../models/TeacherModel';


class TeachersController {
    constructor() {

    }
    //crud controllers
    async getAll(req: Request, res: Response) {
        try {
            const data = await Teacher.find();
            res.status(200).json(data);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message)
            }
        }
    }

    //getById
    async getById(req: Request, res: Response) {
        const {id} = req.params;
        try {
            const data = await Teacher.findOneBy({id: Number(id)});
            if(!data){
                throw new Error('Teacher not found;')
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
            console.log('trying to save', req.body);
            
            const teacher = await Teacher.save(req.body)
            res.status(201).json(teacher);
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
            const teacher = await Teacher.findOneBy({id: Number(id)});
            if(!teacher){
                throw new Error('Student not found')
            }
            await Teacher.update({id: Number(id)}, req.body);
            const teacherUpdated = await Teacher.findOneBy({id: Number(id)});
            res.status(200).json(teacherUpdated);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message)
            }
        }
    }

    //delete
    async delete(req: Request, res: Response) {
        const{id} = req.params;
        try {
            const teacher = await Teacher.findOneBy({id: Number(id)});
            if(!teacher){
                throw new Error('Teacher not found');
            }
            await Teacher.delete({id: Number(id)});
            res.status(204).json({message: 'Teacher deleted'});
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message)
            }
        }
    }
}

export default new TeachersController();