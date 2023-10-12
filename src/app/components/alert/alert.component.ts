import { Component } from "@angular/core";
import { AlertMessage, AlertType } from "./AlertMessage";
import { AlertService } from "./alert.service";


@Component({
    selector: 'pokemon-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
    showAlert: boolean = false;
    message: AlertMessage | null = null;
    alertId: any = 0;


    constructor(private alertService: AlertService) {
        this.alertService.alert.subscribe(message => {
            this.showAlert = true;
            this.message = message;
        });
    }

    alertType() : typeof AlertType {
        return AlertType;
    }

    closeAlert () {
        this.showAlert = false;
    }

    openAlert() {
        this.showAlert = true;
    }

}