import { Gender } from "../enum/Gender";

export interface UserRegister {
    firstname: string,
    lastname?: string,
    email: string,
    password: string,
    details: UserDetails
}

interface UserDetails {
    initialWeight: number;
    targetWeight: number;
    gender: Gender;
    dateOfBirth: number;
    height: number;
}