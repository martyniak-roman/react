import {Product} from "../Product/Product.tsx";
import type { ProductsProps } from "../Product/product.props.ts";
import type {IProduct} from "../../models/IProduct.ts";

export const Products = ({products}: ProductsProps) => {
    return (
        <>
            {/* перебираємо кожен елемент у масиві products за допомогою методу map*/}
            {products.map((product: IProduct, i: number) => (
                <Product product={product} key={i} /> //  Повертає <Product /> компонент
            ))}
        </>
    );
};