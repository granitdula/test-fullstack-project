import mongoose from 'mongoose';

export interface ICar {
    make: string;
    model: string;
    year: Date;
    colour: string;
    mileage: number;
}

const carSchema = new mongoose.Schema<ICar>({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Date, required: true },
    colour: { type: String, required: true },
    mileage: { type: Number, required: true },
});

export const Car = mongoose.model('Car', carSchema);
