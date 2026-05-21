import type {IComment} from "../../models/IComment.ts";
import type {FC} from "react";

interface CommentProps {
    comment: IComment
}

export const Comment: FC<CommentProps> = ({comment: { name, email, body },}) => {
    return (
        <div className='rounded-xl p-4 shadow-sm'>
            <h2 className='text-lg font-semibold'>{name}</h2>
            <p className='mt-1 text-sm'>{email}</p>
            <p className='mt-3 text-sm leading-6'>{body}</p>
        </div>
    );
};