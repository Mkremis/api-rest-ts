import { Response } from 'express';
import { RequestExt } from '../interfaces/reqExt.interface';
import { handleHttp } from '../utils/error.handle';

const getItems = async (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: 'ESTO SOLO LO VEN LAS PERSONAS CON SESSION/JWT',
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS', e);
  }
};

export { getItems };
