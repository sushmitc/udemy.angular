import { Component, OnInit } from '@angular/core';
import { RecipeModel } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipesService],
})
export class RecipesComponent implements OnInit {
  recipeInScope: RecipeModel;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.recipeSelectionEmitter.subscribe(
      (recipeSelected: RecipeModel) => {
        this.recipeInScope = recipeSelected;
      }
    );
  }
}
