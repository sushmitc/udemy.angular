import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe: RecipeModel;

  constructor(private recipesService: RecipesService) {}

  handleRecipeSelection() {
    this.recipesService.recipeSelectionEmitter.emit(this.recipe);
  }
}
