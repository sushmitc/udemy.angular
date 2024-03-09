import { Component } from '@angular/core';
import { HeaderEnums } from './shared/header.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedFeature: HeaderEnums = HeaderEnums.Recipe;

  onNavigating(featureSelected: HeaderEnums) {
    this.loadedFeature = featureSelected;
  }
}
