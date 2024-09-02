import { Request, Response } from "express";
import { Student } from "../models/StudentModel";


class StudentsController {
    constructor() {

    }
    //crud controllers
    async getAll(req: Request, res: Response) {
        try {
            const data = await Student.find();
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
            const data = await Student.findOneBy({id: Number(id)});
            if(!data){
                throw new Error('Student not found;')
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
            
            const student = await Student.save(req.body)
            res.status(201).json(student);
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
            const student = await Student.findOneBy({id: Number(id)});
            if(!student){
                throw new Error('Student not found')
            }
            await Student.update({id: Number(id)}, req.body);
            const studentUpdated = await Student.findOneBy({id: Number(id)});
            res.status(200).json(studentUpdated);
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
            const student = await Student.findOneBy({id: Number(id)});
            if(!student){
                throw new Error('Student not found');
            }
            await Student.delete({id: Number(id)});
            res.status(204).json({message: 'Student deleted'});
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message)
            }
        }
    }
}

export default new StudentsController();