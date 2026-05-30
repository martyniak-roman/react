import {Outlet} from 'react-router-dom';
import {Menu} from "../components/Menu/Menu.tsx";

export const Layouts = () => {
    return <div>
        <Menu/>
        <Outlet/>
    </div>
};