import type {TodoItem} from "../../models/ITodo.ts";
import type {FC} from "react";

interface TodoProps {
    todo: TodoItem
}

export const Todo:FC<TodoProps> = ({todo: {todo, completed}}) => {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="mb-4 flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-slate-900">{todo}</h2>

                <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                        completed
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                    }`}
                >
                    {completed ? "Completed" : "In progress"}
                </span>
            </div>

            <p className="text-sm text-slate-500">
                Status: {completed ? "Done" : "Not completed"}
            </p>
        </div>
    );
};