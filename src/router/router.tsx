import {createBrowserRouter} from "react-router";
import {Layouts} from "../layouts/Layouts.tsx";
import {CartsPage} from "../pages/CartsPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";

export const routes = createBrowserRouter([{
    path: '/', element: <Layouts/>, children: [
        {path: 'users', element: <UsersPage/>},
        {path: 'users/:id/carts', element: <CartsPage/>}
    ]
}])