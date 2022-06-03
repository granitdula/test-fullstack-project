import { Car, ICar } from '../models/car';
import { FilterQuery, Types } from 'mongoose';

export async function findCar(query: FilterQuery<ICar>) {
    return Car.find(query).lean();
}

export async function createCar(input: ICar): Promise<ICar & { _id: Types.ObjectId }> {
    const car = await Car.create(input);
    return car.toJSON();
}
