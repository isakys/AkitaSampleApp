import { AppointmentsQuery } from "./appointments-entity-query";
import { AppointmentsStore } from "./appointments-entity-store";
import { AppointmentsContracts } from "./appointments-contracts";
import axios from "axios";
import { Observable, from, tap, map, switchMap, EMPTY, catchError } from "rxjs";

export const AppointmentService = new class AppointmentsServiceClass {
    private readonly store: typeof AppointmentsStore = AppointmentsStore;

    // public GetAppointments3 = (): Observable<AppointmentsContracts.AppointmentsList | undefined> => {
    //     this.store.setLoading(true);

    //     const request = from(axios.get<AppointmentsContracts.AppointmentsList>("http://localhost:3000/appointments"))
    //         .pipe(tap(response => {
    //             this.store.add(response.data);
    //             this.store.setLoading(false);
    //         }))
    //         .pipe(map(x => x.data));

    //     return cacheable<AppointmentsContracts.AppointmentsList>(this.store, request);
    // };

    public GetAppointments(): Observable<AppointmentsContracts.AppointmentsList> {
        return AppointmentsQuery.selectHasCache().pipe(
            switchMap(hasCache => {
                if (!hasCache) {
                    this.store.setLoading(true);
                }
                const apiCall = from(axios.get<AppointmentsContracts.AppointmentsList>("http://localhost:3000/appointments"))
                    .pipe(
                        tap(response => {
                            this.store.add(response.data);
                            this.store.setLoading(false);
                        }),
                        map(x => x.data),
                        catchError((err, caught) => {
                            this.store.setError(err);
                            this.store.setLoading(false);
                            return caught
                        })
                    );

                return hasCache ? EMPTY : apiCall;
            })
        );
    }

    public PostAppointment(newAppointment: AppointmentsContracts.NewAppointment): Observable<AppointmentsContracts.Appointment> {
        this.store.setLoading(true);

        return from(axios.post<AppointmentsContracts.Appointment>("http://localhost:3000/appointments", newAppointment))
            .pipe(
                tap(response => {
                    console.log(response);
                    
                    this.store.add(response.data);
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

    public UpdateAppointment(id: number, updatedAppointment: AppointmentsContracts.Appointment): Observable<AppointmentsContracts.Appointment> {
        this.store.setLoading(true);

        return from(axios.put<AppointmentsContracts.Appointment>(`http://localhost:3000/appointments/${id}`, updatedAppointment))
            .pipe(
                tap(response => {
                    this.store.update(id, response.data);
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

    public DeleteAppointment(id: number): Observable<AppointmentsContracts.Appointment> {
        this.store.setLoading(true);

        return from(axios.delete<AppointmentsContracts.Appointment>(`http://localhost:3000/appointments/${id}`))
            .pipe(
                tap(response => {
                    console.log(response);
                    this.store.remove(id);
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
}();
