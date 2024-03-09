import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  @Output() selectedRecipe: EventEmitter<RecipeModel> =
    new EventEmitter<RecipeModel>();

  public recipeList: RecipeModel[] = [
    new RecipeModel(
      'Test Recipe 1',
      'This Is A Recipe Description For Recipe 1',
      'https://www.recipetineats.com/wp-content/uploads/2024/01/Vietnamese-lettuce-wraps-with-peanut-sauce_8.jpg?w=747&h=747&crop=1'
    ),
    new RecipeModel(
      'Test Recipe 2',
      'This Is A Recipe Description For Recipe 2',
      'https://www.recipetineats.com/wp-content/uploads/2024/01/Vietnamese-lettuce-wraps-with-peanut-sauce_8.jpg?w=747&h=747&crop=1'
    ),
  ];

  onRecipeSelection(passedValue: RecipeModel) {
    this.selectedRecipe.emit(passedValue);
  }
}
