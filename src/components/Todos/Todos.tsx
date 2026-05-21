import {useEffect, useState} from "react";
import {loadTodos} from "../../services/api.service.ts";
import type {TodoItem} from "../../models/ITodo.ts";
import {Todo} from '../Todo/Todo.tsx'

export const Todos = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    useEffect(() => {
        async function fetchTodos() {
            const allTodos = await loadTodos();
            setTodos(allTodos);
        }

        fetchTodos();

    }, []);

    return (
        <>
            {todos.map(todo => (
                <Todo todo={todo} key={todo.id} />
            ))}
        </>
    );
};