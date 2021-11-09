import { EntityState } from "@datorama/akita";
import { AppointmentsContracts } from "./appointments-contracts";

export interface AppointmentsEntityState extends EntityState<AppointmentsContracts.Appointment, number> { };
