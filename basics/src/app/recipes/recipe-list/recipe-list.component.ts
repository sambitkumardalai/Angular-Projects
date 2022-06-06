import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://recipesofhome.com/wp-content/uploads/2020/03/vegetable-soup-recipe.jpg'
    ),
    new Recipe(
      'Another recipe',
      'This is simply a test',
      'https://recipesofhome.com/wp-content/uploads/2020/03/vegetable-soup-recipe.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
  onRecipeSelected(recipe:Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
