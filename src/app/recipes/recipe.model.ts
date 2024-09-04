import { IngredientsModel } from '../shared/ingredients.model';

export class RecipeModel {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: IngredientsModel[];

  constructor(
    name: string,
    description: string,
    imagePath: string,
    ingredients: IngredientsModel[]
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
