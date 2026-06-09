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

// Створює екземпляр Axios з налаштуваннями:
const axiosInstance = axios.create({
 // Адреса сервера. Вона береться зі змінного оточення (.env)
  baseURL: String(import.meta.env.VITE_API_BASE_URL),
  // Вказує серверу, що всі дані, які ми відправляємо, будуть у форматі JSON.
  headers: {
    'Content-Type': 'application/json',
  },
});

// Перехоплювач HTTP-запитів.
axiosInstance.interceptors.request.use((requestObject) => {
    // Перевіряє, чи є цей запит типом GET
    if(requestObject.method?.toUpperCase() === 'GET'){
    // Якщо це GET-запит, ми за допомогою хелпера ліземо в localStorage, дістаємо токен користувача accessToken і прикріплюємо його в заголовки під назвою Authorization у стандартному форматі Bearer token
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    // Повертає змінений об'єкт запиту
    return requestObject;
});

// Асинхронна функція для авторизації користувача
export const login = async ({username, password, expiresInMins}: LoginData) => {
    // Робить POST-запит на ендпоінт /login і передає туди введені користувачем дані.
   const {data: IUserWithTokens} = await axiosInstance.post('/login', {username, password, expiresInMins});
   // Записує отримані дані користувача (включаючи токени) у сховище браузера під ключем 'user'. Оскільки об'єкти в localStorage зберігати не можна, ми перетворюємо його на рядок через JSON.stringify().
   localStorage.setItem('user', JSON.stringify(IUserWithTokens));
}

// Асинхронна функція для завантаження списку продуктів, доступних тільки для авторизованих користувачів
export const loadAuthProducts = async ():Promise<IProduct[]> => {
    //Робить GET-запит на /products до цього запиту автоматично прикріпиться токен з localStorage завдяки перехоплювачу
    const {data:{products}} = await axiosInstance.get<IProductsResponseModelType>('/products');
    // Глибока деструктуризація. Спочатку береться поле data з відповіді Axios, а вже з нього дістається products масив і повертає його
    return products;
}

// Функція для оновлення accessToken, коли термін дії старого добіг кінця, за допомогою довговічного refreshToken
export const refresh = async () => {
    // Дістаємо поточний об'єкт користувача з localStorage.
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user')
    // Робить POST-запит на /refresh. На сервер відправляється старий refreshToken, щоб довести, що сесія валідна.Сервер у відповідь присилає нову пару токенів, ми їх деструктуризуємо.
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {refreshToken: iUserWithTokens.refreshToken, expiresInMins: 1});
    // Перезаписуємо старі токени в нашому об'єкті користувача новими значеннями.
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    // Зберігаємо оновлений об'єкт назад у localStorage, щоб додаток використовував уже свіжі токени для наступних запитів.
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
    console.log(accessToken, refreshToken);
}