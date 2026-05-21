export interface IComment {
    comments: ICommentItem[]
}

export interface ICommentItem {
    id: number
    body: string
    postId: number
    likes: number
    user: User
}

export interface User {
    id: number
    username: string
    fullName: string
}