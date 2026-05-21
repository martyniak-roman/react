import type {ICommentItem} from "../../models/IComment.ts";
import type {FC} from "react";

interface CommentProps {
    comment: ICommentItem;
}

export const Comment:FC<CommentProps> = ({comment}) => {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                    <h2 className="text-base font-semibold text-slate-900">
                        {comment.user.fullName}
                    </h2>
                    <p className="text-sm text-slate-500">
                        @{comment.user.username}
                    </p>
                </div>

                <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700">
                    Likes: {comment.likes}
                </span>
            </div>

            <p className="text-sm leading-6 text-slate-600">{comment.body}</p>
        </div>
    );
};