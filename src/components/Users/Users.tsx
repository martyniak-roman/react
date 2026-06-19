import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { userActions } from "../../redux/slices/UserSlice";
import type { IUser } from "../../models/IUser";
import User from "../User/User";

const Users = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.userStoreSlice.users);

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, [dispatch]);
   
  return (
    <div>
        {users.map((user: IUser) => (
            <User key={user.id} user={user} />
        ))}
    </div>
  )
}

export default Users