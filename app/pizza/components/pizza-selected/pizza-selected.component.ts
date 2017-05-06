import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Topping } from '../../pizza.interface';

@Component({
  selector: 'pizza-selected',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-selected.component.scss'],
  template: `
    <div class="pizza-selected" [formGroup]="parent">
      <div class="pizza-selected__empty" *ngIf="!selected.length">
        Select toppings to create pizza
      </div>
      <div
        class="pizza-selected__list" 
        *ngIf="selected.length"
        formArrayName="toppings">
        <div 
          class="pizza-selected__item" 
          *ngFor="let topping of selected; index as i;">
          <div [formGroupName]="i">
            <img src="assets/check.svg">
            {{ topping }}
            <button 
              type="button"
              (click)="onRemove(i)">
              <img src="assets/cross.svg">
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PizzaSelectedComponent {

  @Input()
  parent: FormGroup;

  @Input()
  selected: Topping[];

  @Output()
  remove = new EventEmitter<number>();

  onRemove(index: number) {
    this.remove.emit(index);
  }

}