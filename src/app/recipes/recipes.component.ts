import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";
import { RecipeService } from "app/services/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeSelected: Recipe;

  constructor(private recipeService: RecipeService) {
    this.recipeService.onRecipeSelectEmitter.subscribe((recipe: Recipe) => {
      this.recipeSelected = recipe;
    })
  }

  ngOnInit() {
  }

  // onRecipeClick(recipe: Recipe) {
  //   this.detailRecipe = recipe;
  // }

  // showRecipeDetail() {
  //   return false;
  // }
}
