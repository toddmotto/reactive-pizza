import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pizza-button',
  styleUrls: ['pizza-button.component.scss'],
  template: `
    <div class="pizza-button" [formGroup]="parent">
      <button 
        type="button"
        (click)="onClick()"
        [disabled]="parent.invalid">
        <img src="assets/add.svg">
        <ng-content></ng-content>
      </button>
    </div>
  `
})
export class PizzaButtonComponent {

  @Input()
  parent: FormGroup;

  @Output()
  add = new EventEmitter<any>();

  onClick() {
    this.add.emit();
  }

}