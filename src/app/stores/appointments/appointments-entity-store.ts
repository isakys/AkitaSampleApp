import { StoreConfig, EntityStore } from "@datorama/akita";
import { AppointmentsEntityState } from "./appointments-entity-state";

@StoreConfig({ name: "appointments", cache: { ttl: 1 * 60000 }, resettable: true })
class AppointmentsStoreClass extends EntityStore<AppointmentsEntityState> {
    constructor() {
        super({ loading: false });
    }
};

export const AppointmentsStore = new AppointmentsStoreClass();
