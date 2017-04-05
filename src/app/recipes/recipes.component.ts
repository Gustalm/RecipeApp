import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  detailRecipe;

  constructor() { }

  ngOnInit() {
  }

  onRecipeClick(recipe: Recipe) {
    this.detailRecipe = recipe;
  }

  showRecipeDetail() {
    return this.detailRecipe;
  }
}
