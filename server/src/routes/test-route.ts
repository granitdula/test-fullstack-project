import express from 'express';
import { createCarHandler, getCarHandler } from '../controller/car.controller';

const router = express.Router();

router.get('/api/cars', getCarHandler);

router.post('/api/cars', createCarHandler);

export { router as testRouter };
