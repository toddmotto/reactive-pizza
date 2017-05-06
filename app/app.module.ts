import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PizzaModule } from './pizza/pizza.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    PizzaModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}
