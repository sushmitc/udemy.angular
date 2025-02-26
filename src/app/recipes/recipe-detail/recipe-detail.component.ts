import { Component, Input } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  @Input() recipeDetail: RecipeModel;

  constructor(private recipesService: RecipesService) {}

  public handleToShoppingList() {
    this.recipesService.addToShoppingList(this.recipeDetail.ingredients);
  }
}
