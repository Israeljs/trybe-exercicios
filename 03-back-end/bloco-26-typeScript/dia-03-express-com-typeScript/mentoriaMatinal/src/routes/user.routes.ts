import { Request, Response, Router } from 'express';
import UserController from '../controllers/User.controller';
import * as middlewares from '../middlewares';
import newUser from '../utils/joiSchemas/newUser';

const userController = new UserController();

const userRouter = Router();

userRouter.post(
  '/',
  middlewares.jwtAuth,
  middlewares.validateBody(newUser),
  async (req: Request, res: Response) => {
    await userController.addUser(req, res);
  },
);

userRouter.get(
  '/',
  middlewares.jwtAuth,
  async (req: Request, res: Response) => {
    await userController.listUsers(req, res);
  },
);

userRouter.put(
  '/:id',
  middlewares.jwtAuth,
  async (req: Request, res: Response) => {
    await userController.updateAge(req, res);
  },
);

userRouter.delete(
  '/:id',
  middlewares.jwtAuth,
  async (req: Request, res: Response) => {
    await userController.deleteUser(req, res);
  },
);

export default userRouter;