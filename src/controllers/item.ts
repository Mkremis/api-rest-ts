import { Request, Response } from 'express';
import {
  deleteCar,
  getCar,
  getCars,
  insertCar,
  updateCar,
} from '../services/item.services';
import { handleHttp } from '../utils/error.handle';

const getItems = async (req: Request, res: Response) => {
  try {
    const responseItem = await getCars();
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS', e);
  }
};

const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getCar(id);
    const data = response || 'NOT_FOUND';
    res.send(data);
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM', e);
  }
};

const updateItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const response = await updateCar(id, body);
    const data = response || 'NOT_FOUND';
    res.send(data);
  } catch (e) {
    handleHttp(res, 'ERROR_PUT_ITEM', e);
  }
};
const createItem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const responseItem = await insertCar(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, 'ERROR_POST_ITEM', e);
  }
};
const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await deleteCar(id);
    const data = response || 'NOT_FOUND';
    res.send(data);
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_ITEM', e);
  }
};
export { getItem, getItems, updateItem, createItem, deleteItem };
