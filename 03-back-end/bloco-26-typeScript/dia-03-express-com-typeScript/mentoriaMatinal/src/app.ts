import 'dotenv/config';
import express, { Request, Response } from 'express';
import 'express-async-errors';
import { jwtGenerator } from './helpers';
import { errorHandler } from './middlewares';
import userRouter from './routes/user.routes';

const app = express();
app.use(express.json());

app.post(
  '/login',
  async (_req: Request, res: Response) => {
    const token = jwtGenerator({ name: 'Seu Madruga', email: 'desempregado@chavez.com' });

    return res.status(200).json({ token });
  },
);

app.use('/user', userRouter);

app.use(errorHandler);

export default app;
