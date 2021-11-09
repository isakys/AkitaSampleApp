export namespace AppointmentsContracts {
    export interface Staff {
        firstName: string;
        middleName?: string;
        lastName: string;
        specialty: string;
        company: string;
        workplace?: string;
    };

    export interface AppointmentTime {
        start: Date;
        end: Date;
    };

    export type NewAppointment = {
        date: Date;
        time: AppointmentTime;
        provider: string;
        location: string;
        staff?: Staff;
        complaint: string;
        firstName: string;
        middleName: string;
        lastName: string;
        isConfirmed: boolean;
    };
    export interface Appointment extends NewAppointment {
        id: number;
    };

    export type AppointmentsList = Appointment[];
};
