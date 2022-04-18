import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser, IUserModel, UserSelectResponse } from '../interfaces';
import connection from './connection';

export default class UserModel implements IUserModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  getUserByEmail = async (email: string) => {
    const query = 'SELECT * FROM users WHERE email = ?';

    const result = await this.connection.execute(query, [email]);

    const [rows] = result;

    const [user] = rows as UserSelectResponse[];

    return user;
  };

  addUser = async ({ name, age, email }: IUser) => {
    const query = 'INSERT INTO users (name, age, email) VALUES (?, ?, ?)';

    const [result] = await this.connection.execute<ResultSetHeader>(query, [name, age, email]);

    return result.insertId;
  };

  listUsers = async () => {
    const query = 'SELECT * FROM users';

    const result = await this.connection.execute(query);

    const [rows] = result;

    return rows as UserSelectResponse[];
  };

  updateAge = async (newAge: number, id: string) => {
    const query = 'UPDATE users SET age = ? WHERE id = ?';

    const [result] = await this.connection.execute<ResultSetHeader>(query, [newAge, id]);

    return result.affectedRows;
  };

  deleteUser = async (id: string) => {
    const query = 'DELETE FROM users WHERE id = ?';

    const [result] = await this.connection.execute<ResultSetHeader>(query, [id]);

    return result.affectedRows;
  };
}