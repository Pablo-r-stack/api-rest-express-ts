import express from 'express'
import coursesControllers from '../controllers/coursesControllers';

const router = express.Router();

router.get('/', coursesControllers.getAll);

router.post('/', coursesControllers.create);

router.post('/registerStudent', coursesControllers.addStudent);

router.route('/:id')
    .get(coursesControllers.getById)
    .put(coursesControllers.update)
    .delete(coursesControllers.delete)

export default router;