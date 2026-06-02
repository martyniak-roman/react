import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostsPlaceholder, getPostsDummy } from "../../services/api.service.ts";
import type { IPost as IPlaceholderPost } from "../../models/JsonPlaceholder/IPost.ts";
import type { Post as IDummyPost } from "../../models/DummyJson/IPost.ts";
import {Post} from "./Post.tsx";

type AnyPost = IPlaceholderPost | IDummyPost;

export const PostList = () => {
    const { source } = useParams<{ source: string }>();
    const [items, setItems] = useState<AnyPost[]>([]);

    useEffect(() => {
        if (source !== "jsonplaceholder" && source !== "dummyjson") return;

        let ignore = false;
        setItems([]);

        const fetch = source === "jsonplaceholder"
            ? getPostsPlaceholder()
            : getPostsDummy().then((res) => res.posts);

        fetch
            .then((data) => { if (!ignore) setItems(data); })

        return () => { ignore = true; };
    }, [source]);

    return (
        <div className="space-y-8 max-w-3xl animate-fade-in">
            {items.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};