import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pizza-name',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-name.component.scss'],
  template: `
    <div class="pizza-name" [formGroup]="parent">
      <input 
        type="text" 
        placeholder="Pizza name, e.g. Blazin' hot" 
        formControlName="name">
      <div 
        class="error"
        *ngIf="invalid">
        Pizza name is required
      </div>
    </div>
  `
})
export class PizzaNameComponent {

  @Input()
  parent: FormGroup;

  get invalid() {
    return (
      this.parent.get('name').hasError('required') &&
      this.parent.get('name').touched
    );
  }

}