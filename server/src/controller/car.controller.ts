import { Request, Response } from 'express';
import { ICar } from '../models/car';
import { createCar, findCar } from '../service/car.service';

export async function getCarHandler(_req: Request, res: Response) {
    const carDocs = await findCar({});

    if (carDocs.length === 0) {
        return res.status(404);
    }

    return res.send(carDocs);
}

export async function createCarHandler(req: Request, res: Response) {
    const body = req.body as ICar;

    if (body === null) {
        res.status(400).json({ message: 'Bad Request: Can not create a Car document with that body' });
    }

    try {
        const car = await createCar(body);
        res.send(car);
    } catch (error) {
        res.status(400).json({ message: `${error}` });
    }
}
