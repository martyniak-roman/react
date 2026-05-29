import {createBrowserRouter} from "react-router-dom";
import {UsersPage} from "../pages/UsersPage.tsx";
import {Layout} from "../layouts/Layout.tsx";
import {CartsPage} from "../pages/CartsPage.tsx";

export const router = createBrowserRouter([{
    path: '/', element: <Layout/>, children: [
        {
            path: 'users', element: <UsersPage/>, children: [
                {path: ':id/carts', element: <CartsPage/>}

            ]
        },
    ]
}])