import {Outlet} from "react-router-dom";
import {UsersList} from "../components/User/UsersList.tsx";

export const UsersPage = () => {
    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <UsersList/>
        </div>
    );
};