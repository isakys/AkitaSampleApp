import { UserStore } from "./user-store";
import { UserContracts } from "./user-contracts";
import axios, { AxiosRequestConfig } from "axios";
import { TimeFollowerClass } from "./user-time-follower";
import { applyTransaction } from "@datorama/akita";
import { Observable, from, tap, map, catchError } from "rxjs";

export const UserService = new class UserServiceClass {
    private readonly store: typeof UserStore = UserStore;

    public RefreshAccessToken = async (): Promise<boolean> => {
        this.store.setLoading(true);
        try {
            const refreshToken: string = `Bearer ${this.store.getValue().token?.refreshToken}`;
            const config: AxiosRequestConfig = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: refreshToken
                }
            };
            const response = await axios.post("www.mock./api/refresh-access", config);
            applyTransaction(() => {
                this.store.update({
                    token: {
                        accessToken: response.data,
                        refreshToken: refreshToken
                    },
                    loading: false
                });
                this.store.setLoading(false);
            });
            return true;
        } catch (error) {
            this.store.setError(error);
            this.store.setLoading(false);
            return false;
        }
    };

    public RefreshAllTokens = async (): Promise<boolean> => {
        this.store.setLoading(true);
        try {
            const refreshToken: string = `Bearer ${this.store.getValue().token?.refreshToken}`;
            const config: AxiosRequestConfig = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: refreshToken
                }
            };
            const response = await axios.post("www.mock./api/refresh-tokens", config);
            this.store.update({ token: response.data });
            this.store.setLoading(false);
            return true;
        } catch (error) {
            this.store.setError(error);
            this.store.setLoading(false);
            return false;
        }
    };

    private readonly RefreshTokenTimer = new TimeFollowerClass(15 * 60000, this.RefreshAllTokens);
    private readonly AccessTokenTimer = new TimeFollowerClass(5 * 60000, this.RefreshAccessToken);

    public LoadUser = (): Observable<UserContracts.User> => {
        this.store.setLoading(true);
        
        const token: string = `Bearer ${this.store.getValue().token?.refreshToken}`;
        const config: AxiosRequestConfig = {
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        };

        return from(axios.post<UserContracts.User>("http://localhost:3000/user", config))
            .pipe(
                tap(response => {
                    console.log(response);
                    // this.RefreshTokenTimer.SetTimeout();
                    // this.AccessTokenTimer.SetTimeout();
                    this.store.update(response.data);
                    this.store.setLoading(false);
                }),
                map(x => x.data),
                catchError((err, caught) => {
                    this.store.setError(err);
                    this.store.setLoading(false);
                    return caught
                })
            );
    };

    public LoginUser = (data: UserContracts.NewUser): Observable<UserContracts.User> => {
        this.store.setLoading(true);
        return from(axios.post<UserContracts.User>("http://localhost:3000/user", data))
            .pipe(
                tap(response => {
                    console.log(response);
                    // this.RefreshTokenTimer.SetTimeout();
                    // this.AccessTokenTimer.SetTimeout();
                    this.store.update(response.data);
                    this.store.setLoading(false);
                }),
                map(x => x.data),
                catchError((err, caught) => {
                    this.store.setError(err);
                    this.store.setLoading(false);
                    return caught
                })
            );
    };

    public LogoutUser = async (): Promise<boolean> => {
        this.store.setLoading(true);
        try {
            const accessToken: string = `Bearer ${this.store.getValue().token?.accessToken}`;
            const config: AxiosRequestConfig = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: accessToken
                }
            };
            const response = await axios.post("www.mock./api/logout", config);
            this.store.update(response.data);
            this.store.setLoading(false);
            return true;
        } catch (error) {
            this.store.setError(error);
            this.store.setLoading(false);
            return false;
        }
    };

    public RegisterUser = (data: UserContracts.NewUser): Observable<UserContracts.NewUser> => {
        this.store.setLoading(true);
        return from(axios.post<UserContracts.NewUser>("http://localhost:3000/user", data))
            .pipe(
                tap(response => {
                    console.log(response);

                    this.store.update(response.data);
                    this.store.setLoading(false);
                }),
                map(x => x.data),
                catchError((err, caught) => {
                    this.store.setError(err);
                    this.store.setLoading(false);
                    return caught
                })
            );
    };

    public UpdateUserProfile = async (data: UserContracts.UserProfile): Promise<boolean> => {
        this.store.setLoading(true);
        try {
            const accessToken: string = `Bearer ${this.store.getValue().token?.accessToken}`;
            const config: AxiosRequestConfig = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: accessToken
                }
            };
            const response = await axios.post("www.mock./api/update-profile", data, config);
            this.store.update(response.data);
            this.store.setLoading(false);
            return true;
        } catch (error) {
            this.store.setError(error);
            this.store.setLoading(false);
            return false;
        }
    };

}();
