import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { PokemonApiService } from './pokemon-api.service';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [PokemonApiService]
})
export class ServiceModule {}