import {useEffect, useState} from "react";
import {loadComments} from "../../services/api.service.ts";
import {Comment} from "../Comment/Comment.tsx";
import type {ICommentItem} from "../../models/IComment.ts";

export const Comments = () => {
    const [comments, setComments] = useState<ICommentItem[]>([]);
    useEffect(() => {

        async function fetchComments() {
            const allComments = await loadComments()
            setComments(allComments);
        }

        fetchComments();
    })
    return (
        <>
            {comments.map(comment => (<Comment comment={comment}  key={comment.id}/>))}
        </>
    );
};