import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackgroundComponent } from './background';
import { LoadingComponent, LoaderService } from './loading';
import { InputComponent } from './input';
import { ButtonComponent } from './button';
import { MenuComponent } from './menu';
import { DeckCardComponent } from './deck-card';
import { AlertComponent, AlertService } from './alert';
import { CardComponent } from './card';


@NgModule({
  declarations: [
    BackgroundComponent,
    LoadingComponent,
    InputComponent,
    ButtonComponent,
    MenuComponent,
    DeckCardComponent,
    AlertComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AlertService,
    LoaderService
  ],
  exports: [
    BackgroundComponent, 
    LoadingComponent,
    InputComponent,
    ButtonComponent,
    MenuComponent,
    DeckCardComponent,
    AlertComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
