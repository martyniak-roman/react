import type { IUser as IPlaceholderUser } from "../../models/JsonPlaceholder/IUser.ts";
import type { User as IDummyUser } from "../../models/DummyJson/IUser.ts";

type AnyUser = IPlaceholderUser | IDummyUser;

interface UserItemProps {
    user: AnyUser;
}

const isPlaceholderUser = (user: AnyUser): user is IPlaceholderUser => "name" in user;

export const User = ({ user }: UserItemProps) => {
    return (
        <div className="space-y-2">
            <div className="text-base font-bold border-b border-slate-100 pb-1">
                {user.id} — {isPlaceholderUser(user) ? user.name : `${user.firstName} ${user.lastName}`}
            </div>

            <div className="space-y-0.5 pl-4 border-l-2 border-slate-100 text-sm">
                <div className="flex gap-2">
                    <span className="font-medium">email:</span>
                    <span>{user.email}</span>
                </div>

                <div className="flex gap-2">
                    <span className="font-medium">phone:</span>
                    <span>{user.phone}</span>
                </div>

                <div className="flex gap-2">
                    <span className="font-medium">username:</span>
                    <span>{user.username}</span>
                </div>

                {isPlaceholderUser(user) ? (
                    <>
                        <div className="flex gap-2">
                            <span className="font-medium">website:</span>
                            <span>{user.website}</span>
                        </div>

                        <div className="flex gap-2">
                            <span className="font-medium">company:</span>
                            <span>{user.company.name}</span>
                        </div>

                        <div className="flex gap-2">
                            <span className="font-medium">address:</span>
                            <span>
                                {user.address.street}, {user.address.city}, {user.address.zipcode}
                            </span>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex gap-2">
                            <span className="font-medium">age:</span>
                            <span>{user.age}</span>
                        </div>

                        <div className="flex gap-2">
                            <span className="font-medium">company:</span>
                            <span>{user.company.name}</span>
                        </div>

                        <div className="flex gap-2">
                            <span className="font-medium">address:</span>
                            <span>
                                {user.address.address}, {user.address.city}, {user.address.country}
                            </span>
                        </div>

                        <div className="flex gap-2">
                            <span className="font-medium">university:</span>
                            <span>{user.university}</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};