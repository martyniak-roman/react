import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../layouts/Layouts.tsx";
import { HomePage } from "../pages/Home/HomePage.tsx";
import {UsersPage} from "../pages/Users/UsersPage.tsx";
import {UserList} from "../components/User/UserList.tsx";
import {PostsPage} from "../pages/Posts/PostsPage.tsx";
import {PostList} from "../components/Post/PostList.tsx";
import {CommentsPage} from "../pages/Comments/CommentsPage.tsx";
import {CommentList} from "../components/Comment/CommentList.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "users",
                element: <UsersPage />,
                children: [
                    {
                        path: ":source",
                        element: <UserList />,
                    },
                ],
            },
            {
                path: "posts",
                element: <PostsPage />,
                children: [
                    {
                        path: ":source",
                        element: <PostList />,
                    },
                ],
            },
            {
                path: "comments",
                element: <CommentsPage />,
                children: [
                    {
                        path: ":source",
                        element: <CommentList />,
                    },
                ],
            },
        ],
    },
]);