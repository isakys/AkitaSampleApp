import { UserContracts } from "./user-contracts";

export interface UserState extends UserContracts.User {
    isAuthenticated: boolean;
    loading: boolean;
};
