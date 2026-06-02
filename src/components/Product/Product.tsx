import type {ProductItem} from "../../models/IProduct.ts";

interface ProductProps {
    product: ProductItem
}

export const Product = ({product: {title, description, category, price, discountPercentage, rating, stock, tags, brand, thumbnail, availabilityStatus,},}: ProductProps) => {
    const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(2);

    return (
        <div>
            <img
                src={thumbnail}
                alt={title}
                className="rounded-xl object-cover"
            />

            <p className="text-sm">{brand}</p>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm">{description}</p>

            <div>
                {tags.map(tag => (
                    <span
                        key={tag}
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            <p className="text-sm">{category}</p>
            <p className="text-xl font-bold">${discountedPrice}</p>
            <p className="text-sm line-through">${price}</p>
            <p className="text-sm">{rating}</p>
            <p className="text-sm">Stock: {stock}</p>
            <p className="text-sm">{availabilityStatus}</p>
        </div>
    );
};