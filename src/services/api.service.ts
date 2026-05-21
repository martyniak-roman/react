import type {ITodo} from "../models/ITodo.ts";

const getPosts = async ():Promise<ITodo[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json());
}

export {
    getPosts,
}