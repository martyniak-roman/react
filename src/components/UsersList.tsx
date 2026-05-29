import {useEffect, useState} from "react";
import type {IUser} from "../models/IUser.ts";
import {User} from "./User.tsx";
import type {IUserResponseModel} from "../models/IUserResponseModel.ts";
import {userService} from "../services/api.service.ts";

export const UsersList = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAllUsers()
            .then(({users}: IUserResponseModel) => {
                setUsers(users);
            });

    }, []);
    return (
        <>
            {users.map((user: IUser) => (
                <User user={user} key={user.id}/>
            ))}
        </>
    );
};