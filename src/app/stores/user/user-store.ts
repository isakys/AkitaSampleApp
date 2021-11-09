import { StoreConfig, Store } from "@datorama/akita";
import { UserState } from "./user-state";

@StoreConfig({ name: "user", cache: { ttl: 1 * 60000 }, resettable: true })
class UserStoreClass extends Store<UserState> {
    constructor() {
        super({ loading: false });
    }
};

export const UserStore = new UserStoreClass();
