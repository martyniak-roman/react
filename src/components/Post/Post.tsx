import type {PostItem} from "../../models/IPost.ts";
import type {FC} from "react";

interface PostProps {
    post: PostItem
}

export const Post:FC<PostProps> = ({post}) => {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="mb-4">
                <h2 className="mb-2 text-xl font-semibold text-slate-900">
                    {post.title}
                </h2>

                <p className="line-clamp-3 text-sm leading-6 text-slate-600">
                    {post.body}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                {post.tags.map(tag => (
                    <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                <span>Views: {post.views}</span>
                <span>User ID: {post.userId}</span>
                <span>Likes: {post.reactions.likes}</span>
                <span>Dislikes: {post.reactions.dislikes}</span>
            </div>
        </div>
    );
};