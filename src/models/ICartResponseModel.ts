import type {ICart} from "./ICart.ts";

export interface ICartResponseModel {
    total: number;
    limit: number;
    skip: number;
    carts: ICart[];
}