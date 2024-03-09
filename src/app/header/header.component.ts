import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderEnums } from '../shared/header.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() featureSelected: EventEmitter<HeaderEnums> =
    new EventEmitter<HeaderEnums>();

  onSelect(value: string) {
    if (value === 'recipe') this.featureSelected.emit(HeaderEnums.Recipe);
    else this.featureSelected.emit(HeaderEnums.ShoppingList);
  }
}
