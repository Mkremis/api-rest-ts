import { Router } from 'express';
import {
  createItem,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from '../controllers/item';
import { logMiddleware } from '../middleware/log';

const router = Router();
router
  .get('/', getItems)
  .get('/:id', logMiddleware, getItem)
  .post('/', createItem)
  .put('/:id', updateItem)
  .delete('/:id', deleteItem);
export { router };
