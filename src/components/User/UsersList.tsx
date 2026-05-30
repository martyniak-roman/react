import {useEffect, useState} from "react";
import {userService} from "../../services/api.services.ts";
import type {IUser} from "../../models/IUser.ts";
import type {IUserResponseModel} from "../../models/IUserResponseModel..ts";
import {User} from "./User.tsx";

export const UsersList = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAllUsers()
            .then(({users}: IUserResponseModel) => {
                setUsers(users);
            });

    }, []);

    return (
        <div>
            {
                users.map((user: IUser) => <User key={user.id} user={user}/>)
            }
        </div>
    );
};