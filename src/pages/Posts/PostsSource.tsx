import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const PostsSource = () => {
    const {source} = useParams<{source: string}>();
    const [, setPosts] = useState<[]>([]);

    useEffect(() => {

        if (source === "jsonplaceholder"){
            fetch(import.meta.env.VITE_JSONPLACEHODER_API_Posts)
                .then(value => value.json())
                .then(data => setPosts(data))

        } else if (source === "dummyjson"){
            fetch(import.meta.env.VITE_DUMMYJSON_API_Posts)
                .then(value => value.json())
                .then(data => setPosts(data.users))
        }

    }, [source])

    return (
        <div>
            {source}
        </div>
    );
};