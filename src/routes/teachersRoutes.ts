import express from 'express'
import teachersControllers from '../controllers/teachersControllers';

const router = express.Router();

router.get('/', teachersControllers.getAll)
router.post('/', teachersControllers.create)

router.route('/:id')
    .get(teachersControllers.getById)
    .put(teachersControllers.update)
    .delete(teachersControllers.delete)

export default router;