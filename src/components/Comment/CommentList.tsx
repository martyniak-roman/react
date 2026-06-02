import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsPlaceholder, getCommentsDummy } from "../../services/api.service.ts";
import type { IComments as IPlaceholderComment } from "../../models/JsonPlaceholder/IComments.ts";
import type { Comment as IDummyComment } from "../../models/DummyJson/IComment.ts";
import {Comment} from "./Comment.tsx"

type AnyComment = IPlaceholderComment | IDummyComment;

export const CommentList = () => {
    const { source } = useParams<{ source: string }>();
    const [items, setItems] = useState<AnyComment[]>([]);

    useEffect(() => {
        if (source !== "jsonplaceholder" && source !== "dummyjson") return;

        let ignore = false;
        setItems([]);

        const fetchData =
            source === "jsonplaceholder"
                ? getCommentsPlaceholder()
                : getCommentsDummy().then((res) => res.comments);

        fetchData
            .then((data) => {
                if (!ignore) setItems(data);
            })

        return () => {
            ignore = true;
        };
    }, [source]);

    return (
        <div className="space-y-8 max-w-3xl animate-fade-in">
            {items.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
};