import type { IUser } from "../models/JsonPlaceholder/IUser.ts";
import type { IPost } from "../models/JsonPlaceholder/IPost.ts";
import type { IComments } from "../models/JsonPlaceholder/IComments.ts";

import type { IUser as IDummyUser} from "../models/DummyJson/IUser.ts";
import type { IPost as IDummyPost} from "../models/DummyJson/IPost.ts";
import type { IComment as IDummyComment} from "../models/DummyJson/IComment.ts";


type IDummyUsersResponse = {
    users: IDummyUser[];
};

type IDummyPostsResponse = {
    posts: IDummyPost[];
};

type IDummyCommentsResponse = {
    comments: IDummyComment[];
};

async function getUsersPlaceholder(): Promise<IUser[]> {
    const response = await fetch(import.meta.env.VITE_JSONPLACEHOLDER_API_USERS);
    if (!response.ok) throw new Error("Failed to fetch JSONPlaceholder users");
    return await response.json();
}

async function getPostsPlaceholder(): Promise<IPost[]> {
    const response = await fetch(import.meta.env.VITE_JSONPLACEHOLDER_API_POSTS);
    if (!response.ok) throw new Error("Failed to fetch JSONPlaceholder posts");
    return await response.json();
}

async function getCommentsPlaceholder(): Promise<IComments[]> {
    const response = await fetch(import.meta.env.VITE_JSONPLACEHOLDER_API_COMMENTS);
    if (!response.ok) throw new Error("Failed to fetch JSONPlaceholder comments");
    return await response.json();
}

async function getUsersDummy(): Promise<IDummyUsersResponse> {
    const response = await fetch(import.meta.env.VITE_DUMMYJSON_API_USERS);
    if (!response.ok) throw new Error("Failed to fetch DummyJson users");
    return await response.json();
}

async function getPostsDummy(): Promise<IDummyPostsResponse> {
    const response = await fetch(import.meta.env.VITE_DUMMYJSON_API_POSTS);
    if (!response.ok) throw new Error("Failed to fetch DummyJson posts");
    return await response.json();
}

async function getCommentsDummy(): Promise<IDummyCommentsResponse> {
    const response = await fetch(import.meta.env.VITE_DUMMYJSON_API_COMMENTS);
    if (!response.ok) throw new Error("Failed to fetch DummyJson comments");
    return await response.json();
}

export {
    getUsersPlaceholder,
    getPostsPlaceholder,
    getCommentsPlaceholder,
    getUsersDummy,
    getPostsDummy,
    getCommentsDummy
};