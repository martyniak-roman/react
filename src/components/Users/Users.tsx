import {useEffect, useState} from "react";
import {User} from "../User/User.tsx";
import {getUsers} from "../../services/api.service.ts";

export const Users = () => {
    console.log('users');
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(setUsers());

        return () => {
            console.log('unsubscribe');
        }

    }, []);

    return (
        <div>
            {users.map(user => (
                <User key={user.id}/>
            ))}

        </div>
    );
};