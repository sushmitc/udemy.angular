import { Component } from '@angular/core';
import { IngredientsModel } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  public ingredientsList: IngredientsModel[] = [
    new IngredientsModel('Apple', 5),
    new IngredientsModel('Tomatoes', 10),
  ];

  AddIngredient(value: IngredientsModel) {
    this.ingredientsList.push(value);
  }
}
