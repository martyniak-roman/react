import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export const UsersSource = () => {
    const {source} = useParams<{source: string}>();
    const [,setUsers] = useState ([]);

    useEffect(() => {

        if (source === "jsonplaceholder"){
            fetch(import.meta.env.VITE_JSONPLACEHODER_API)
                .then(value => value.json())
                .then(data => setUsers(data))

        } else if (source === "dummyjson"){
            fetch(import.meta.env.VITE_DUMMYJSON_API)
                .then(value => value.json())
                .then(data => setUsers(data.users))
        }

    }, [source])

    return (
        <div>
            {source}
        </div>
    );
};