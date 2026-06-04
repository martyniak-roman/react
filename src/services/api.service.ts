import axios from "axios";
import type {ICar} from "../models/ICar.ts";

const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL,
    headers: {'Content-Type': 'application/json'},
});

export const getCars = async (): Promise<ICar[]> => {
    const axiosResponse = await axiosInstance.get<ICar[]>("/cars");
    console.log(axiosResponse);
    const cars = axiosResponse.data;
    console.log(cars);
    return cars;
}


export const addCar = async (car: ICar) => {
    await axiosInstance.post("/cars", car);
}