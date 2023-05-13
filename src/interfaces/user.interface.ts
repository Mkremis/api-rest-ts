import { Auth } from './auth.interface';

export interface User extends Auth {
  first: string;
  last: string;
  email: string;
  avatar: string;
}
