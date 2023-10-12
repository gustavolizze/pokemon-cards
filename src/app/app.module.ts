import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ComponentsModule } from 'app/components';
import { ScreensModule } from 'app/screens';
import { AppRoutingModule } from './app-routing.module';
import { GameModule } from './game';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    CommonModule,
    GameModule,
    ScreensModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
