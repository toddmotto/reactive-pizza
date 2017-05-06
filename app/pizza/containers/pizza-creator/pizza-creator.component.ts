import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { PizzaService } from '../../pizza.service';

import { Pizza, Topping } from '../../pizza.interface';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'pizza-creator',
  styleUrls: ['pizza-creator.component.scss'],
  template: `
    <div class="pizza-creator">
      <div class="pizza-creator__title">
        <h1>
          <img src="assets/logo.svg">
          Pizza Creator
        </h1>
      </div>
      <div class="pizza-creator__panes">
        <pizza-form
          [toppings]="toppings$ | async"
          (add)="addPizza($event)">
        </pizza-form>
        <pizza-list
          [pizzas]="pizzas$ | async">
        </pizza-list>
      </div>
    </div>
  `
})
export class PizzaCreatorComponent {

  pizzas$: Observable<Pizza[]> = this.pizzaService.select('pizzas');
  toppings$: Observable<Topping[]> = this.pizzaService.select('toppings');

  constructor(
    private pizzaService: PizzaService
  ) {}

  addPizza(event: any) {
    this.pizzaService.addPizza(event);
  }

}