import { AxiosInstance } from 'axios';
import { CarPostBody } from '../types/ApiBodies';
import { CarResponseData } from '../types/ApiResponse';

export default class CarDataService {
    constructor(private axios: AxiosInstance) {}

    public async getAllCars(): Promise<CarResponseData> {
        const res = await this.axios.get(`${process.env.REACT_APP_CAR_API_URL}api/cars`);
        return res.data;
    }

    public async postCar(carData: CarPostBody): Promise<CarPostBody> {
        const res = await this.axios.post(`${process.env.REACT_APP_CAR_API_URL}api/cars`, carData);
        console.log('Car data posted successfully!');
        return res.data;
    }
}
