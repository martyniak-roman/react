import type {User as IDummyUser} from "../../models/IUser.ts";

export const User = ({user}:{user:IDummyUser}) => {
    return (
        <div key={user.id} className="text-sm">
            <p> {user.id} — {user.firstName} {user.lastName}</p>
        </div>
    );
};