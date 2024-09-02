import express from 'express';
import studentsControllers from '../controllers/studentsControllers';

const router = express.Router();

router.get('/', studentsControllers.getAll);

router.post('/', studentsControllers.create);

router.route('/:id')
    .get(studentsControllers.getById)
    .put(studentsControllers.update)
    .delete(studentsControllers.delete)


export default router;