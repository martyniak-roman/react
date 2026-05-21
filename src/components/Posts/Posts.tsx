import {useEffect, useState} from "react";
import {loadPosts} from "../../services/api.service.ts";
import {Post} from "../Post/Post.tsx";
import type {PostItem} from "../../models/IPost.ts";

export const Posts = () => {
    const [posts, setPosts] = useState<PostItem[]>([]);
    useEffect(() => {
        async function fetchPosts() {
            const allPosts = await loadPosts();
            setPosts(allPosts);
        }

        fetchPosts();
    }, []);

    return (
        <>
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </>
    );
};