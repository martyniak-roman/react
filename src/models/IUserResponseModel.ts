import type {IUser} from "./IUser.ts";

export interface IUserResponseModel {
    total: number;
    limit: number;
    skip: number;
    users: IUser[];
}