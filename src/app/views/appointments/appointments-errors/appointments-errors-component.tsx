import * as React from "react";
import { ErrorUniversalComponent } from "../../errors/error-universal-component";
import { Error401View, Error404View } from "../../errors/errors-views";

interface Props {
    error: any
}

export const AppointmentsErrorsComponent = React.memo<Props>(props => {
    const { error } = props;

    if (error.status === 401) {
        return <Error401View />;
    }

    if (error.status === 404) {
        return <Error404View />;
    }

    return <ErrorUniversalComponent message={error.message} />;
});