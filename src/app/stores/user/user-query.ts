import { Query } from "@datorama/akita";
import { Observable } from "rxjs";
import { UserState } from "./user-state";
import { UserStore } from "./user-store";

export const UserQuery = new class UserQueryClass extends Query<UserState> {
    constructor(protected store = UserStore) {
        super(store);
    };

    public SelectIsAuthenticated(): Observable<boolean> {
        return this.select("isAuthenticated");
    };


    public SelectIsPending(): Observable<boolean> {
        return this.selectLoading();
    };
}();
