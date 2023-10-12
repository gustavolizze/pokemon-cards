import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, filter } from "rxjs";
import { AlertMessage, AlertType } from "./AlertMessage";


@Injectable({
    providedIn: 'root'
})
export class AlertService {
    private _alert: BehaviorSubject<AlertMessage | null> = new BehaviorSubject<AlertMessage | null>(null);

    public get alert() {
        return this._alert.asObservable().pipe(filter(value => !!value));
    }

    public showSuccess(message: string) {
        if (message) {
            this._alert.next(new AlertMessage(AlertType.Success, message));
        }
    }


    public showError(message: string) {
        if (message) {
            this._alert.next(new AlertMessage(AlertType.Error, message));
        }
    }
}