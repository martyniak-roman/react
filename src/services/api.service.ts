import type {TodoModel} from "../models/ITodo.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos';

async function loadTodos():Promise<TodoModel[]> {
    return await fetch(endpointTodos)
        .then(value => value.json())
}

export {
    loadTodos,
}