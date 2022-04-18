import { Request, Response } from 'express';
import UserService from '../services/User.services';

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async addUser(req: Request, res: Response) {
    const { status, data } = await this.userService.addUser(req.body);

    return res.status(status).json(data);
  }

  async listUsers(_req: Request, res: Response) {
    const { status, data } = await this.userService.listUsers();

    return res.status(status).json(data);
  }

  async updateAge(req: Request, res: Response) {
    const { status, data } = await this.userService.updateAge(req.body.newAge, req.params.id);

    return res.status(status).json(data);
  }

  async deleteUser(req: Request, res: Response) {
    const { status, data } = await this.userService.deleteUser(req.params.id);

    return res.status(status).json(data);
  }
}