import type { IUser } from "../../models/IUser"

type IUserProps = {
    user: IUser
}

const User = ({user}: IUserProps) => {
  return (
    <div>User: {user.name}</div>
  )
}

export default User