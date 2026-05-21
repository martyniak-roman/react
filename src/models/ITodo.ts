export interface Root {
    todos: TodoItem[]
}

export interface TodoItem {
    id: number
    todo: string
    completed: boolean
    userId: number
}
