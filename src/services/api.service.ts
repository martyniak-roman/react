import axios from 'axios';
import type { IUserWithTokens } from '../models/IUserWithTokens.ts';
import type { IProduct } from '../models/IProduct.ts';
import type { IProductsResponseModelType } from '../models/IProductsResponseModelType.ts';
import { retriveLocalStorage } from './helpers.ts';
import type { ITokenPair } from '../models/ITokenPair.ts';

export type LoginData = {
    username: string;
    password: string;
    expiresInMins?: number;
};


const axiosInstance = axios.create({
  baseURL: String(import.meta.env.VITE_API_BASE_URL),
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((requestObject) => {
    if(requestObject.method?.toUpperCase() === 'GET'){
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return requestObject;
});


export const login = async ({username, password, expiresInMins}: LoginData) => {
   const {data: IUserWithTokens} = await axiosInstance.post('/login', {username, password, expiresInMins});
   localStorage.setItem('user', JSON.stringify(IUserWithTokens));
}

export const loadAuthProducts = async ():Promise<IProduct[]> => {
    const {data:{products}} = await axiosInstance.get<IProductsResponseModelType>('/products');
    return products;
}

export const refresh = async () => {
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user')
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {refreshToken: iUserWithTokens.refreshToken, expiresInMins: 1});
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
    console.log(accessToken, refreshToken);
}