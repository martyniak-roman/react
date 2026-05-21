import {useEffect, useState} from "react";
import type {ProductItem} from "../../models/IProduct.ts";
import {loadProducts} from "../../services/api.service.ts";
import {Product} from '../Product/Product.tsx'

export const Products = () => {
    const [products, setProducts] = useState<ProductItem[]>([]);
    useEffect(() => {

        async function fetchProducts() {
            const allProducts = await loadProducts()
            setProducts(allProducts);
        }

        fetchProducts();

    }, [])
    return (
        <div className="grid grid-cols-4 gap-4">
            {products.map(product => (<Product product={product}  key={product.id}/>))}
        </div>
    );
};