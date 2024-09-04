import { Component, ElementRef, ViewChild } from '@angular/core';
import { IngredientsModel } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css',
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onIngredientAdd() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;

    if (ingredientName !== '' && ingredientAmount !== '')
      this.shoppingListService.addIngredient(
        new IngredientsModel(ingredientName, ingredientAmount)
      );
  }

  onClear() {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }

  onDelete() {}

  // checkDisability() {

  //   return (
  //     this.nameInputRef?.nativeElement?.value === '' &&
  //     this.amountInputRef?.nativeElement?.value === ''
  //   );
  // }
}
