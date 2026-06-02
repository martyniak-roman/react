import type {IBaseResponse} from "./IBaseResponse.ts";
import type {IUser} from "./IUser.ts";

export interface IUsersResponse extends IBaseResponse {
    users: IUser[];
}