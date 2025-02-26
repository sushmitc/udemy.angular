import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  public recipeList: RecipeModel[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipeList = this.recipesService.GetRecipeList();
  }
}
