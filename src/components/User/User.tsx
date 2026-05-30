import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";
import {useNavigate} from "react-router-dom";

type Props = {
    user: IUser,

}
export const User: FC<Props> = ({user}) => {
    const navigation = useNavigate();

    const onButtonClickNavigate = () => {
        navigation('/users/' + user.id + '/carts')
    }
    return <div className={"my-5"}>
        {user.username}: {user.email}


        <button className={"border-2"} onClick={onButtonClickNavigate}>click me
        </button>
    </div>;
}