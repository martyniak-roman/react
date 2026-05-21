import type {ITodo} from "../models/ITodo.ts";

const getPosts = async ():Promise<ITodo[]> => {
    return await fetch(import.meta.env.VITE_PUBLIC_API_URL)
        .then((res) => res.json());
}

export {
    getPosts,
}