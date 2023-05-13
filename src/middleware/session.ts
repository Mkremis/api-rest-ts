import { NextFunction, Response } from 'express';
import { RequestExt } from '../interfaces/reqExt.interface';

import { verifyToken } from '../utils/jwt.handle';

const checkSession = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || '';
    const jwt = jwtByUser.split(' ').pop(); //['Bearer','11111']
    const isUser = verifyToken(`${jwt}`) as { id: string };
    console.log('isUser', isUser);
    if (!isUser) {
      res.status(401);
      res.send('NO_TIENES_UNA_SESSION_VALIDA');
    } else {
      req.user = isUser;
      next();
    }
  } catch (e) {
    res.status(400);
    console.log(e);
    res.send('SESSION_NO_VALIDA');
  }
};
export { checkSession };
