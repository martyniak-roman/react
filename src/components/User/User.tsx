import type {IUser} from "../../models/IUser.ts";

interface UserProps {
    user: IUser;
}

export const User = ({user}:UserProps) => {
    return (
        <div className="block">{user.id} {user.username}</div>
    );
};