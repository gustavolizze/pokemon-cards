import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { AddDeckComponent } from "./add-deck";
import { ComponentsModule } from "app/components";
import { DeckComponent } from './deck';
import { ServiceModule } from "app/services";


@NgModule({
    declarations: [
        AddDeckComponent,
        DeckComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        ServiceModule
    ],
    exports: [
        AddDeckComponent,
        DeckComponent
    ]
})
export class ScreensModule {}