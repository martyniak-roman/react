import type {ITodo} from "../../models/ITodo.ts";
import type {FC} from "react";

type PostProps = {
    post: ITodo
}

export const Post:FC<PostProps> = ({post: {title, body}}) => {
    return (
        <article className='rounded-xl border border-gray-200 bg-white p-4 shadow-sm'>
            <h2 className='mb-2 text-lg font-semibold text-gray-900'>
                {title}
            </h2>
            <p className='text-sm text-gray-600'>
                {body}
            </p>
        </article>
    );
};