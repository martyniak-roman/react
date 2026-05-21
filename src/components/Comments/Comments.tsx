import {useEffect, useState} from "react";
import type {IComment} from "../../models/IComment.ts";
import {getComments} from "../../services/api.service.ts";
import {Comment} from "../Comment/Comment.tsx";

export const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {

        async function fetchComments () {
           const allComments = await getComments();
           setComments(allComments);
        }

        fetchComments();

    }, [])
    return (
        <>
            {comments.map((comment, i) => (
                <Comment key={i} comment={comment} />
            ))}
        </>
    );
};