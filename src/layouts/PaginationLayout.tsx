import {Outlet} from "react-router-dom";
import {Pagination} from "../components/Pagination/Pagination.tsx";

export const PaginationLayout = () => {
    return (
        <>
        <Outlet/>
            <Pagination/>
        </>
    );
};