import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { IngredientsModel } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css',
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() newIngredientadded: EventEmitter<IngredientsModel> =
    new EventEmitter<IngredientsModel>();

  onIngredientAdd() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;

    debugger;
    if (ingredientName !== '' && ingredientAmount !== '')
      this.newIngredientadded.emit(
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
