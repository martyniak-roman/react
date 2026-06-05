import { Outlet } from "react-router-dom";
import { Menu } from "../components/Menu/Menu";

export const MainLayout = () => {
    return (
        <>
        <Menu/>
        <Outlet/>
        </>
    );
};