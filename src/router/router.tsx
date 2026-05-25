import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../layouts/Layout.tsx";

import { HomePage } from "../pages/Home/HomePage.tsx";
import { UsersPage } from "../pages/Users/UsersPage.tsx";
import { PostsPage } from "../pages/Posts/PostsPage.tsx";
import { CommentsPage } from "../pages/Comments/CommentsPage.tsx";
import { UsersSource } from "../pages/Users/UsersSource.tsx";
import { PostsSource } from "../pages/Posts/PostsSource.tsx";

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
                        element: <UsersSource />,
                    },
                ],
            },
            {
                path: "posts",
                element: <PostsPage />,
                children: [
                    {
                        path: ":source",
                        element: <PostsSource />,
                    },
                ],
            },
            {
                path: "comments/jsonplaceholder",
                element: <CommentsPage />,
            },
        ],
    },
]);