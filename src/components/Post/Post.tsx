import type { IPost as IPlaceholderPost } from "../../models/JsonPlaceholder/IPost";
import type { Post as IDummyPost } from "../../models/DummyJson/IPost";

type AnyPost = IPlaceholderPost | IDummyPost;

interface PostItemProps {
    post: AnyPost;
}

const isDummyPost = (post: AnyPost): post is IDummyPost => "tags" in post;

export const Post = ({ post }: PostItemProps) => {
    return (
        <div className="space-y-2">
            <div className="text-base font-bold text-slate-900 border-b border-slate-100 pb-1">
                #{post.id} — {post.title}
            </div>

            <div className="space-y-0.5 pl-4 border-l-2 border-slate-100 text-sm">
                <div className="flex gap-2">
                    <span className="text-slate-400 font-medium">userId:</span>
                    <span className="text-slate-800">{post.userId}</span>
                </div>

                <div className="flex gap-2">
                    <span className="text-slate-400 font-medium">body:</span>
                    <span className="text-slate-800 break-all">{post.body}</span>
                </div>

                {isDummyPost(post) && (
                    <>
                        <div className="flex gap-2">
                            <span className="text-slate-400 font-medium">tags:</span>
                            <span className="text-slate-800">{post.tags.join(", ")}</span>
                        </div>

                        <div className="flex gap-2">
                            <span className="text-slate-400 font-medium">views:</span>
                            <span className="text-slate-800">{post.views}</span>
                        </div>

                        <div className="flex gap-2">
                            <span className="text-slate-400 font-medium">likes:</span>
                            <span className="text-slate-800">{post.reactions.likes}</span>
                        </div>

                        <div className="flex gap-2">
                            <span className="text-slate-400 font-medium">dislikes:</span>
                            <span className="text-slate-800">{post.reactions.dislikes}</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};