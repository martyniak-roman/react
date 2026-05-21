import {useEffect, useState} from "react";
import type {ITodo} from "../../models/ITodo.ts";
import {getPosts} from "../../services/api.service.ts";
import {Post} from "../Post/Post.tsx";

export const Posts = () => {
    const [posts, setPosts] = useState<ITodo[]>([]);
    useEffect(() => {

        async function fetchPosts() {
            const allPosts = await getPosts();
            setPosts(allPosts)
        }

        fetchPosts()

    }, [])
    return (
        <>
            {posts.map(post => <Post key={post.id} post={post} />)}
        </>
    );
};