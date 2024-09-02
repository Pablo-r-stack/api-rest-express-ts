import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import studentsRoutes from './routes/studentsRoutes';
import teachersRoutes from './routes/teachersRoutes';
import couresRoutes from './routes/coursesRoutes';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req: Request, res: Response) => res.send('Hola mundo'));
app.use('/students', studentsRoutes);
app.use('/teachers', teachersRoutes);
app.use('/courses', couresRoutes); 

export default app;