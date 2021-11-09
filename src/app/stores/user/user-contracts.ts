import { StrictOmit } from "ts-essentials";

export namespace UserContracts {
    export interface UserProfile {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
    };

    export interface NewUser {
        email: string;
        password: string;
    }

    export interface User extends StrictOmit<NewUser, "password"> {
        accessToken?: string;
        user?: UserProfile;
    };
};
