import type { PostItem} from "../models/IPost.ts";
import type {ICommentItem} from "../models/IComment.ts";
import type {TodoItem} from "../models/ITodo.ts";

const endpointTodos = import.meta.env.VITE_API_URL + '/todos';
const endpointPosts = import.meta.env.VITE_API_URL + '/posts';
const endpointComments = import.meta.env.VITE_API_URL + '/comments';

const loadTodos = async ():Promise<TodoItem[]> => {
    const response = await fetch(endpointTodos)
        .then(value => value.json())
    return response.todos
}

const loadPosts = async ():Promise<PostItem[]> => {
   const response = await fetch(endpointPosts)
        .then(value => value.json())
    return response.posts
}

const loadComments = async ():Promise<ICommentItem[]> => {
    const response = await fetch(endpointComments)
        .then(value => value.json())
    return response.comments
}

export {
    loadTodos,
    loadPosts,
    loadComments,
}