import { FormArray, AbstractControl } from '@angular/forms';

export const ToppingsValidator = (control: AbstractControl): {[key: string]: boolean} => {
  const toppings = (control.get('toppings') as FormArray).value;
  return toppings.length ? null : { noToppings: true };
};