import { EventEmitter } from '@angular/core';
import { IngredientsModel } from '../shared/ingredients.model';

export class ShoppingListService {
  public ingredientsChanged: EventEmitter<IngredientsModel[]> =
    new EventEmitter<IngredientsModel[]>();

  private ingredientsList: IngredientsModel[] = [
    new IngredientsModel('Apple', 5),
    new IngredientsModel('Tomatoes', 10),
  ];

  public getIngredients(): IngredientsModel[] {
    return this.ingredientsList.slice();
  }

  public addIngredient(ingredient: IngredientsModel) {
    this.ingredientsList.push(ingredient);
    this.ingredientsChanged.emit(this.ingredientsList.slice());
  }

  public onAddToShoppingList(ingredients: IngredientsModel[]) {
    this.ingredientsList.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredientsList.slice());
  }
}
