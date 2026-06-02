import {createBrowserRouter} from "react-router-dom";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PaginationLayout} from "../layouts/PaginationLayout.tsx";
import {MainLayout} from "../layouts/MainLayout.tsx";

export const routes = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {path: 'list', element: <PaginationLayout/>, children: [
                {path: 'users', element: <UsersPage />}
            ]}
    ]
}])