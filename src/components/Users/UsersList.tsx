import {useState, useEffect} from 'react'
import {getUsersDummy} from "../../api/api.service.ts";
import {User} from "./User.tsx";

export const UsersList = () => {
    const [users, setUsers] = useState<any[]>([])

    useEffect(() => {
        async function fetchUser() {
            try {
                const data = await getUsersDummy();
                setUsers(data.users || []);
            } catch (error) {
                console.error("Error", error);
            }
        }

        fetchUser();

    }, []);
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id}/>
            ))}
        </div>
    );
};