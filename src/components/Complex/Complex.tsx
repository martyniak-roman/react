import { useEffect } from "react";
import { commentActions } from "../../redux/slices/CommentSlice";
import { postAction } from "../../redux/slices/PostSlice";
import { userActions } from "../../redux/slices/UserSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const Complex = () => {

const dispatch = useAppDispatch();

    const {commentStoreSlice: {comments}, userStoreSlice: {users}, postStoreSlice: {posts}} = useAppSelector(state => state);

    useEffect(() => {
        if (!users.length) {
            dispatch(userActions.loadUsers());
        }
        if (!posts.length) {
            dispatch(postAction.loadPosts());
        }
        if (!comments.length) {
            dispatch(commentActions.loadComments());
        }

    }, [dispatch, users.length, posts.length, comments.length]);

    return (
        <div>
            <h1>Users Data</h1>

            {users.map(user => {
                const userPosts = posts.filter(post => post.userId === user.id);

                return (
                    <div key={user.id} >
                        <h2>User: {user.name} ({user.email})</h2>
                        
                        <div>
                            <h3>Posts:</h3>
                            {userPosts.length === 0 ? <p>No posts</p> : userPosts.map(post => {
                                const postComments = comments.filter(comment => comment.postId === post.id);

                                return (
                                    <div key={post.id}>
                                        <h4>Title: {post.title}</h4>
                                        <p>{post.body}</p>

                                        <div>
                                            <h5>Comments:</h5>
                                            {postComments.length === 0 ? <p>Don't have comments</p> : (
                                                <ul>
                                                    {postComments.map(comment => (
                                                        <li key={comment.id}>
                                                            <strong>{comment.email}:</strong> {comment.body}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        <hr />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Complex;