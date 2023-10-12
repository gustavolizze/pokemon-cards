import { Component } from "@angular/core";
import { LoaderService } from "./loader.service";

@Component({
    selector: 'pokemon-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
    loading: boolean = false; 

    constructor(
        private loaderService: LoaderService
    ) {
        this.loaderService.loading().subscribe(loading => {
            this.loading = loading;
        });
    }


}