import type {Post as IDummyPost} from "../../models/IPost.ts";

export const Post = ({post}:{post:IDummyPost}) => {
    return (
        <div className="text-sm">
            <p> {post.id} — {post.title}</p>
            <p> {post.body}</p>
        </div>
    );
};