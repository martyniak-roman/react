export interface IUserWithTokens {
    id: number;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    accessToken: string;
    refreshToken: string;
}