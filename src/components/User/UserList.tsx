import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsersPlaceholder, getUsersDummy } from "../../api/api.service.ts";
import type { IUser as IPlaceholderUser } from "../../models/JsonPlaceholder/IUser.ts";
import type { User as IDummyUser } from "../../models/DummyJson/IUser.ts";
import {User} from "./User.tsx";

type AnyUser = IPlaceholderUser | IDummyUser;

export const UserList = () => {
    const { source } = useParams<{ source: string }>();
    const [items, setItems] = useState<AnyUser[]>([]);

    useEffect(() => {
        if (source !== "jsonplaceholder" && source !== "dummyjson") return;

        let ignore = false;
        setItems([]);

        const fetchData =
            source === "jsonplaceholder"
                ? getUsersPlaceholder()
                : getUsersDummy().then((res) => res.users);

        fetchData
            .then((data) => {
                if (!ignore) setItems(data);
            })

        return () => {
            ignore = true;
        };
    }, [source]);


    return (
        <div className="space-y-8 max-w-3xl animate-fade-in">
            {items.map((user) => (
                <User key={user.id} user={user} />
            ))}
        </div>
    );
};