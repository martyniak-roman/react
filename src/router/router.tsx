import { createBrowserRouter } from "react-router-dom";

import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {Layout} from "../layouts/Layout.tsx";


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
            },
            {   path: "posts",
                element: <PostsPage/>,
            },
        ],
    },
]);