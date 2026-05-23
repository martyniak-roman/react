import { createBrowserRouter } from "react-router-dom";
import {Layout} from "../layouts/Layout.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {ProductsPage} from "../pages/ProductsPage.tsx";
import {HomePage} from "../pages/HomePage.tsx";

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
            {
                path: "posts",
                element: <PostsPage />,
            },
            {
                path: "comments",
                element: <CommentsPage />,
            },
            {
                path: "products",
                element: <ProductsPage />,
            },
        ],
    },
]);

// export const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/" element={<Layout />}>
//             <Route index element={<HomePage />} />
//             <Route path="products" element={<ProductsPage />} />
//             <Route path="users" element={<UsersPage />} />
//             <Route path="posts" element={<PostsPage />} />
//             <Route path="comments" element={<CommentsPage />} />
//         </Route>
//     )
// );