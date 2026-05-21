import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../layouts/Layout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {TodosPage} from "../pages/TodosPage.tsx";


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
                path: "todos",
                element: <TodosPage />,
            },
            {
                path: "posts",
                element: <PostsPage />,
            },
            {
                path: "comments",
                element: <CommentsPage />,
            },
        ],
    },
]);