import { QueryEntity } from "@datorama/akita";
import { Observable } from "rxjs";
import { AppointmentsEntityState } from "./appointments-entity-state";
import { AppointmentsStore } from "./appointments-entity-store";
import { AppointmentsContracts } from "./appointments-contracts";

export const AppointmentsQuery = new class AppointmentsQueryClass extends QueryEntity<AppointmentsEntityState> {
    constructor(protected store = AppointmentsStore) {
        super(store);
    };

    public SelectAllAppointments(): Observable<AppointmentsContracts.AppointmentsList> {
        return this.selectAll();
    };

    public SelectAppointment(id: number): Observable<AppointmentsContracts.Appointment | undefined> {
        return this.selectEntity(id);
    };

    public SelectIsConfirmed(): Observable<AppointmentsContracts.AppointmentsList> {
        return this.selectAll({
            filterBy: [
                entity => entity.isConfirmed === true
            ]
        });
    };

    public SelectIsUnconfirmed(): Observable<AppointmentsContracts.AppointmentsList> {
        return this.selectAll({
            filterBy: [
                entity => entity.isConfirmed === false
            ]
        });
    };

    public SelectIsPending(): Observable<boolean> {
        return this.selectLoading();
    };

    public SelectError<ErrorType = any>(): Observable<ErrorType> {
        return this.selectError();
    };
}();
