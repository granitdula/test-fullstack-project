interface CarData {
    _id: string;
    make: string;
    model: string;
    year: Date;
    colour: string;
    mileage: number;
    __v: number;
}

export type CarResponseData = CarData[];
