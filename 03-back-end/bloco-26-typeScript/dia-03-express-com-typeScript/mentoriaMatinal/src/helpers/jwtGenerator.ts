import jwt from 'jsonwebtoken';
import { ITokenData } from '../interfaces';

const jwtConfig = { expiresIn: '1d' };

const SECRET = process.env.JWT_SECRET || 'secret_ruim';

export default (data: ITokenData) => jwt.sign({ data }, SECRET, jwtConfig);