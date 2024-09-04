import { EventEmitter, Injectable } from '@angular/core';
import { IngredientsModel } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeModel } from './recipe.model';

@Injectable()
export class RecipesService {
  private recipeList: RecipeModel[] = [
    new RecipeModel(
      'Test Recipe 1',
      'This Is A Recipe Description For Recipe 1',
      'https://www.recipetineats.com/wp-content/uploads/2024/01/Vietnamese-lettuce-wraps-with-peanut-sauce_8.jpg?w=747&h=747&crop=1',
      [
        new IngredientsModel('meat', 1),
        new IngredientsModel('French Fries', 20),
      ]
    ),
    new RecipeModel(
      'Test Recipe 2',
      'This Is A Recipe Description For Recipe 2',
      'https://www.recipetineats.com/wp-content/uploads/2024/01/Vietnamese-lettuce-wraps-with-peanut-sauce_8.jpg?w=747&h=747&crop=1',
      [new IngredientsModel('cheese', 5), new IngredientsModel('bun', 2)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  public recipeSelectionEmitter: EventEmitter<RecipeModel> =
    new EventEmitter<RecipeModel>();

  public GetRecipeList(): RecipeModel[] {
    return this.recipeList.slice(0);
  }

  public addToShoppingList(ingredients: IngredientsModel[]) {
    this.slService.onAddToShoppingList(ingredients);
  }
}
