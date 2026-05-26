import type {IComments as IPlaceholderComment} from "../../models/JsonPlaceholder/IComments.ts";
import type {IComment as IDummyComment} from "../../models/DummyJson/IComment.ts";

type AnyComment = IPlaceholderComment | IDummyComment;

interface CommentItemProps {
    comment: AnyComment;
}

const isPlaceholderComment = (
    comment: AnyComment
): comment is IPlaceholderComment => "name" in comment;

export const Comment = ({ comment }: CommentItemProps) => {
    return (
        <div className="space-y-2">
            <div className="text-base font-bold text-slate-900 border-b border-slate-100 pb-1">
                #{comment.id} — {isPlaceholderComment(comment) ? comment.name : comment.user.fullName}
            </div>

            <div className="space-y-0.5 pl-4 border-l-2 border-slate-100 text-sm">
                <div className="flex gap-2">
                    <span className="text-slate-400 font-medium">postId:</span>
                    <span className="text-slate-800">{comment.postId}</span>
                </div>

                <div className="flex gap-2">
                    <span className="text-slate-400 font-medium">body:</span>
                    <span className="text-slate-800 break-all">{comment.body}</span>
                </div>

                {isPlaceholderComment(comment) ? (
                    <div className="flex gap-2">
                        <span className="text-slate-400 font-medium">email:</span>
                        <span className="text-slate-800">{comment.email}</span>
                    </div>
                ) : (
                    <>
                        <div className="flex gap-2">
                            <span className="text-slate-400 font-medium">username:</span>
                            <span className="text-slate-800">{comment.user.username}</span>
                        </div>

                        <div className="flex gap-2">
                            <span className="text-slate-400 font-medium">likes:</span>
                            <span className="text-slate-800">{comment.likes}</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};