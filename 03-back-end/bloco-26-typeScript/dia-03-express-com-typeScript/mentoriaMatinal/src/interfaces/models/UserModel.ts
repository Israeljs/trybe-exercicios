import { IUser } from '../User/User';

export interface UserSelectResponse extends IUser {
  id: number
}

export interface IUserModel {
  getUserByEmail: (email: string) => Promise<UserSelectResponse>;
  addUser: (user: IUser) => Promise<number>;
  listUsers: () => Promise<UserSelectResponse[]>;
  updateAge: (newAge: number, id: string) => Promise<number>
  deleteUser: (id: string) => Promise<number>
}