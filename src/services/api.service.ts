import type {ProductItem} from "../models/IProduct.ts";

const endpointTodos = import.meta.env.VITE_API_URL + '/products';

const loadProducts = async ():Promise<ProductItem[]> => {
    const response = await fetch(endpointTodos)
        .then(value => value.json())
    return response.products
}

export {
    loadProducts,
}