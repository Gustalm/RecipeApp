import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";
import { RecipeService } from "./recipe.service";
import { Ingredient } from "app/shared/Ingredient.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
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
}
