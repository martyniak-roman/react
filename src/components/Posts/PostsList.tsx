import {useState, useEffect} from 'react'
import {getPostsDummy} from "../../api/api.service.ts";
import {Post} from "./Post.tsx";

export const PostsList = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const data = await getPostsDummy();
                setPosts(data.posts || []);
            } catch (error) {
                console.error("Error", error);
            }
        }
        fetchPosts();
    }, []);

    return (
        <div className="space-y-8 max-w-3xl text-slate-800">
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    );
};