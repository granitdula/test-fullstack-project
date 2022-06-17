import { AxiosInstance } from 'axios';
import { CarResponseData } from '../types/ApiResponse';

export default class CarDataService {
    constructor(private axios: AxiosInstance) {}

    public async getAllCars(): Promise<CarResponseData> {
        const res = await this.axios.get(`${process.env.REACT_APP_CAR_API_URL}api/cars`);
        return res.data;
    }
}
