import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import App from "../App";
import CommentsPage from "../pages/CommentsPage";
import ComplexPage from "../pages/ComplexPage";

export const routes = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'complex', element: <ComplexPage/>},
        ]
    }
]);