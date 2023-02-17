import { IUser } from "./User";

export interface ILogin{ user: IUser }

export interface ICredencials {
    email: string, 
    password: string
}