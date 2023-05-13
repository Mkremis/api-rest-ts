import { Request, Response } from 'express';
import { registerNewUser, loginUser } from '../services/auth.services';

const registerCtrl = async (req: Request, res: Response) => {
  const { body } = req;
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

const loginCtrl = async (req: Request, res: Response) => {
  const { body } = req;
  const { username, password } = body;
  const responseUser = await loginUser({ username, password });
  if (responseUser === 'INCORRECT_PASSWORD') {
    res.status(403);
    res.send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { registerCtrl, loginCtrl };
