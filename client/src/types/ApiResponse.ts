interface CarData {
    make: string;
    model: string;
    year: Date;
    colour: string;
    mileage: number;
}

export type CarResponseData = CarData[];
