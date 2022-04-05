import { ITokenData } from '../../interfaces';

declare module 'express-serve-static-core' {
  interface Request {
    tokenData?: ITokenData
  }
}