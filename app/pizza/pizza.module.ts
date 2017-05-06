import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// containers
import { PizzaCreatorComponent } from './containers/pizza-creator/pizza-creator.component';

// components
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { PizzaNameComponent } from './components/pizza-name/pizza-name.component';
import { PizzaSelectedComponent } from './components/pizza-selected/pizza-selected.component';
import { PizzaButtonComponent } from './components/pizza-button/pizza-button.component';
import { ToppingsSelectorComponent } from './components/toppings-selector/toppings-selector.component';

// services
import { PizzaService } from './pizza.service';

// pipes
import { JoinPipe } from './pipes/join.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    PizzaCreatorComponent,
    PizzaFormComponent,
    PizzaListComponent,
    PizzaNameComponent,
    PizzaSelectedComponent,
    PizzaButtonComponent,
    ToppingsSelectorComponent,
    JoinPipe
  ],
  providers: [
    PizzaService
  ],
  exports: [
    PizzaCreatorComponent
  ]
})
export class PizzaModule {}
