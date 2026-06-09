import type {IProduct} from "../../models/IProduct.ts";

export interface ProductProps {
    product: IProduct;
}

export interface ProductsProps {
    products: IProduct[];
}