import { Request, Response, Router } from 'express';
import { getItems } from '../controllers/order';
import { checkSession } from '../middleware/session';
// A esta ruta solo pueden acceder las personas que tengan una session activa
// que tengan un JWT valido
const router = Router();
router.get('/', checkSession, getItems);

export { router };
