import type {ProductItem} from "../../models/IProduct.ts";

interface ProductProps {
    product: ProductItem
}

export const Product = ({product: {title, description, category, price, discountPercentage, rating, stock, tags, brand, thumbnail, availabilityStatus,},}: ProductProps) => {
    const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(2);

    return (
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm mb-5">
            <img
                src={thumbnail}
                alt={title}
                className="mb-4 aspect-square w-full rounded-xl object-cover"
            />

            <p className="text-sm text-slate-500">{brand}</p>
            <h2 className="mb-2 text-lg font-semibold text-slate-900">{title}</h2>
            <p className="mb-3 text-sm text-slate-600">{description}</p>

            <div className="mb-3 flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            <p className="text-sm text-slate-500">{category}</p>
            <p className="text-xl font-bold text-slate-900">${discountedPrice}</p>
            <p className="text-sm text-slate-400 line-through">${price}</p>
            <p className="text-sm text-amber-500">⭐ {rating}</p>
            <p className="text-sm text-slate-500">Stock: {stock}</p>
            <p className="text-sm text-slate-500">{availabilityStatus}</p>
        </article>
    );
};