import { Component, OnInit } from '@angular/core';
import { IngredientsModel } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  public ingredientsList: IngredientsModel[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  public ngOnInit(): void {
    this.ingredientsList = this.shoppingListService.getIngredients();

    this.shoppingListService.ingredientsChanged.subscribe(
      (value: IngredientsModel[]) => {
        this.ingredientsList = value;
      }
    );
  }
}
