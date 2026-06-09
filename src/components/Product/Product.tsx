import type {ProductProps} from "./product.props.ts";

export const Product = ({product}: ProductProps) => {
    return (
        <>
            <p>{product.title}</p> // Рендерить властивість title
            <p>{product.description}</p> // // Рендерить властивість description
        </>
    );
};