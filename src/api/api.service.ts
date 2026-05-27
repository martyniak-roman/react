import type { IUser as IDummyUser} from "../models/IUser.ts";
import type { IPost as IDummyPost} from "../models/IPost.ts";

type IDummyUsersResponse = {
    users: IDummyUser[];
};

type IDummyPostsResponse = {
    posts: IDummyPost[];
};

async function getUsersDummy(): Promise<IDummyUsersResponse> {
    const response = await fetch(import.meta.env.VITE_DUMMYJSON_API_USERS);
    if (!response.ok) throw new Error("Failed to fetch DummyJson users");
    return await response.json();
}

async function getPostsDummy(): Promise<IDummyPostsResponse> {
    const response = await fetch(import.meta.env.VITE_DUMMYJSON_API_POSTS + "?limit=30");
    if (!response.ok) throw new Error("Failed to fetch DummyJson posts");
    return await response.json();
}

export {
    getUsersDummy,
    getPostsDummy
}