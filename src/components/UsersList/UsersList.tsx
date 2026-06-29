import {useEffect, useState} from "react";
import type {IUsersResponse} from "../../models/IUsersResponse.ts";
import {getUsers} from "../../services/api.service.ts";
import type {IUser} from "../../models/IUser.ts";
import {useSearchParams} from "react-router-dom";
import {User} from "../User/User.tsx";
import { Pagination } from "../Pagination/Pagination.tsx";

export const UsersList = () => {
    const [searchParams] = useSearchParams({page: '1'});

    const [users, setUsers] = useState<IUser[]>([]);
    const [total, setTotal] = useState<number>(0);
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';

        getUsers(currentPage).then(({users, total}: IUsersResponse) => {

            setUsers(users);
            setTotal(total);
        });
    }, [searchParams]);
    return (
        <div>
            <div>
            {users.map((user: IUser) => <User user={user} key={user.id}/>)}
            </div>
            <Pagination total={total} limit={30}/>
        </div>
    );
};