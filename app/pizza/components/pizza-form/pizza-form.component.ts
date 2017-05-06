import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

import { Pizza, Topping } from '../../pizza.interface';
import { ToppingsValidator } from '../../toppings.validator';

@Component({
  selector: 'pizza-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-form.component.scss'],
  template: `
    <form [formGroup]="form">

      <toppings-selector
        [parent]="form"
        [toppings]="toppings"
        [selected]="control.value"
        (select)="selectTopping($event)">
      </toppings-selector>

      <pizza-name 
        [parent]="form">
      </pizza-name>

      <pizza-selected
        [parent]="form"
        [selected]="control.value"
        (remove)="removeTopping($event)">
      </pizza-selected>

      <pizza-button
        [parent]="form"
        (add)="onSubmit()">
        Add pizza
      </pizza-button>

    </form>
  `
})
export class PizzaFormComponent {

  @Input()
  toppings: Topping[];

  @Output()
  add = new EventEmitter<FormGroup>();

  form = this.fb.group({
    name: ['', Validators.required],
    toppings: this.fb.array([])
  }, {
    validator: ToppingsValidator
  });

  constructor(
    private fb: FormBuilder
  ) {}

  get control() {
    return this.form.get('toppings') as FormArray;
  }

  addTopping(topping: Topping) {
    this.control.push(new FormControl(topping));
  }

  removeTopping(index: number) {
    this.control.removeAt(index);
  }

  selectTopping(topping: Topping) {
    const index = this.control.value.indexOf(topping);
    if (!!~index) {
      this.removeTopping(index);
    } else {
      this.addTopping(topping);
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.add.emit(this.form.value);
  }

}