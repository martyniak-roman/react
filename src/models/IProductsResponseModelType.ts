import type {IProduct} from './IProduct.ts';

export interface IProductsResponseModelType {
    total: number;
    skip: number;
    limit: number;
    products: IProduct[];
}