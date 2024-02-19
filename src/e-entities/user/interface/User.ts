import { Gender } from "../enum/Gender";
import { UserRole } from "../enum/Role";

export interface User {
    firstname: string,
    lastname?: string,
    email: string,
    role: UserRole,
    details: UserDetails
}

interface UserDetails {
    initialWeight: number;
    targetWeight: number;
    gender: Gender;
    age: number;
    height: number;
}