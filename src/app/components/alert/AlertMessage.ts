

export enum AlertType {
    Success = 'success',
    Error = 'error'
}

export class AlertMessage {
    type: AlertType;
    message: string;

    constructor(type: AlertType, message: string) {
        this.message = message;
        this.type = type;
    }
}