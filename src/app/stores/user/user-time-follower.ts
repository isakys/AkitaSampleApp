import { setTimeout } from "timers";

export class TimeFollowerClass {
    private duration: number;
    private callableFunction: () => Promise<boolean>;

    public constructor(_duration: number, _callableFunction: () => Promise<boolean>) {
        this.duration = _duration;
        this.callableFunction = _callableFunction;
    };

    public SetTimeout = (): void => {
        setTimeout(() => {
            this.callableFunction();
        }, this.duration);
    };
};
