import { IUser } from '../interfaces';
import UserModel from '../models/User.models';

export default class UserService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  addUser = async (newUser: IUser) => {
    const userAlreadyExists = await this.userModel.getUserByEmail(newUser.email);

    if (userAlreadyExists) return { status: 409, data: { message: 'User already exists' } };

    const userId = await this.userModel.addUser(newUser);

    return { status: 201, data: { userId, ...newUser } };
  };

  listUsers = async () => {
    const users = await this.userModel.listUsers();

    return { status: 200, data: users };
  };

  updateAge = async (newAge: number, id: string) => {
    const updateStatus = await this.userModel.updateAge(newAge, id);

    if (updateStatus === 0) return { status: 422, data: { message: 'Failed to update age' } };

    return { status: 200, data: { message: 'Age successfully updated' } };
  };

  deleteUser = async (id: string) => {
    const deleteStatus = await this.userModel.deleteUser(id);

    if (deleteStatus === 0) return { status: 422, data: { message: 'Failed to delete user' } };

    return { status: 200, data: { message: 'User successfully deleted' } };
  };
}