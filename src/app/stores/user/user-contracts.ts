import { ID } from "@datorama/akita";
import { StrictOmit } from "ts-essentials";

export namespace UserContracts {
    export interface Token {
        refreshToken: string;
        accessToken: string;
    };

    export interface UserProfile {
        firstName: string;
        lastName: string;
    };

    export interface NewUser {
        email: string;
        password: string;
    }

    export interface User extends StrictOmit<NewUser, "password"> {
        id: ID;
        token?: Token;
        profile?: UserProfile;
    };
};
