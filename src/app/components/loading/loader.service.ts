import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable()
export class LoaderService {
    private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    public loading() : Observable<boolean> {
        return this._loading.asObservable();
    }


    showFor(seconds: number) {
        this._loading.next(true);

        setTimeout(() => {
            this._loading.next(false);
        }, seconds * 1000);
    }

    show() {
        this._loading.next(true);
    }

    close() {
        this._loading.next(false);
    }

}