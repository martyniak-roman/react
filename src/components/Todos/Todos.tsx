import {useEffect, useState} from "react";
import type {TodoModel} from "../../models/ITodo.ts";
import {loadTodos} from "../../services/api.service.ts";
import {Todo} from "../Todo/Todo.tsx";

export const Todos = () => {
    const [todos, setTodos] = useState<TodoModel[]>([])

    useEffect(() => {
        loadTodos().then(value => setTodos(value));
    }, [])

    return (
        <div>
            {todos.map(todo => <Todo todo={todo} key={todo.id} />)}
        </div>
    );
};