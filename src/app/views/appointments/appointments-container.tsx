import * as React from "react";
import { AppointmentsContracts } from "../../stores/appointments/appointments-contracts";
import { LoaderView } from "../loader/loader-view";
import { useObservable, useObservableState } from "observable-hooks";
import { AppointmentsQuery } from "../../stores/appointments/appointments-entity-query";
import { AppointmentService } from "../../stores/appointments/appointments-entity-service";
import { AppointmentsErrorsView } from "./appointments-errors/appointments-errors-view";
import { AppointmentsComponent } from "./appointments-component";
import { APP_ROUTES } from "../../routes/app-routes";
import { Redirect } from "react-router";
import { UserService } from "../../stores/user/user-service";
import { UserQuery } from "../../stores/user/user-query";

interface ContainerProps {
    appointments: AppointmentsContracts.AppointmentsList;
}


class AppointmentsContainerClass extends React.PureComponent<ContainerProps>{
    public render(): React.ReactNode {
        const { appointments } = this.props;

        return <AppointmentsComponent appointments={appointments} />;
    };
}

export const AppointmentsContainer = React.memo(() => {
    const isPendingObservable = useObservable<boolean>(() => AppointmentsQuery.SelectIsPending());
    const isPending = useObservableState<boolean>(isPendingObservable, true);

    const appointmentsObservable = useObservable<AppointmentsContracts.AppointmentsList>(() => AppointmentsQuery.SelectAllAppointments());
    const appointments = useObservableState<AppointmentsContracts.AppointmentsList>(appointmentsObservable, []);

    const errorObservable = useObservable<any>(() => AppointmentsQuery.SelectError());
    const error = useObservableState<any | null>(errorObservable, null);

    React.useEffect(() => {
        const getAppointmentsSubscription = AppointmentService.GetAppointments().subscribe();

        return () => {
            getAppointmentsSubscription.unsubscribe();
        };
    }, []);

    if (isPending) {
        return <LoaderView />;
    }

    if (error) {
        return <AppointmentsErrorsView error={error} />;
    }

    return <AppointmentsContainerClass appointments={appointments} />
});