import * as React from "react";

interface Props {
    error: any
}

export const AppointmentsErrorsComponent = React.memo<Props>(props => {
    const { error } = props;

    return <h1>{error}</h1>
});