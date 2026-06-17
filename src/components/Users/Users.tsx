import {useEffect, useState} from "react";
import {User} from "../User/User.tsx";
import {getUsers} from "../../services/api.service.ts";
import type { IUser } from "../../models/IUser.ts";

export const Users = () => {
    console.log('users');
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getUsers().then(setUsers).then(() => console.log('users loaded'));

        return () => {
            console.log('unsubscribe');
        }

    }, []);

    return (
        <div>
            {users.map(user => (
                <User key={user.id} user={user} />
            ))}

        </div>
    );
};