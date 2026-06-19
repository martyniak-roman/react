import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { postAction } from "../../redux/slices/PostSlice";
import Post from "../Post/Post";

const Posts = () => {
     const dispatch = useAppDispatch();
        const posts = useAppSelector(state => state.postStoreSlice.posts);
    
        useEffect(() => {
            dispatch(postAction.loadPosts());
        }, [dispatch]);
  return (
    <div>
        {posts.map((post) => (<Post key={post.id} post={post} />))}
    </div>
  )
}

export default Posts