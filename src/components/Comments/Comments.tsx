import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import  {commentActions } from "../../redux/slices/CommentSlice";
import Comment  from "../Comment/Comment";

const Comments = () => {
     const dispatch = useAppDispatch();
        const comments = useAppSelector(state => state.commentStoreSlice.comments);
    
        useEffect(() => {
            dispatch(commentActions.loadComments());
        }, [dispatch]);
  return (
    <div>
        {comments.map((comment) => (<Comment key={comment.id} comment={comment} />))}
    </div>
  )
}

export default Comments