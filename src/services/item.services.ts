import { Car } from '../interfaces/car.interface';
import ItemModel from '../models/item.models';

const getCars = async () => {
  const responseItems = await ItemModel.find({});
  return responseItems;
};
const getCar = async (id: string) => {
  const responseItems = await ItemModel.findOne({ _id: id });
  return responseItems;
};
const updateCar = async (id: string, data: Car) => {
  const responseInsert = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseInsert;
};
const insertCar = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};
const deleteCar = async (id: string) => {
  const responseItems = await ItemModel.findByIdAndRemove({ _id: id });
  return responseItems;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };
