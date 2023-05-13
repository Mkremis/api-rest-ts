import { Router } from 'express';
import { getFile } from '../controllers/upload';
import multerMiddleware from '../middleware/file';
import { checkSession } from '../middleware/session';

// A esta ruta solo pueden acceder las personas que tengan una session activa
// que tengan un JWT valido
const router = Router();
router.post('/', checkSession, multerMiddleware.single('myFile'), getFile);

export { router };
