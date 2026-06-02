import {useEffect, useState} from "react";
import type {IUsersResponse} from "../../models/IUsersResponse.ts";
import {getUsers} from "../../services/api.service.ts";
import type {IUser} from "../../models/IUser.ts";
import {useSearchParams} from "react-router-dom";
import {User} from "../User/User.tsx";

export const UsersList = () => {
    const [searchParams] = useSearchParams({page: '1'});

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';

        getUsers(currentPage).then(({users}: IUsersResponse) => {

            setUsers(users);
        });
    }, [searchParams]);
    return (
        <div>
            {users.map((user: IUser) => <User user={user} key={user.id}/>)}
        </div>
    );
};