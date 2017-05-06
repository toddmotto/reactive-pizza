import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Pizza } from '../../pizza.interface';

@Component({
  selector: 'pizza-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-list.component.scss'],
  template: `
    <div class="pizza-list">
      <h2>Store inventory</h2>
      <div *ngFor="let pizza of pizzas">
        <p>{{ pizza.name }}</p>
        <span>{{ pizza.toppings | join }}</span>
      </div>
    </div>
  `
})
export class PizzaListComponent {

  @Input()
  pizzas: Pizza[];

}