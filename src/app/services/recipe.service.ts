import { Recipe } from "app/recipes/recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
    recipes: Recipe[] =
    [new Recipe("RecipeName1", "Description 1", "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg"),
    new Recipe("RecipeName2", "Description 2", "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg")];

    selectedRecipe: Recipe;

    onRecipeSelectEmitter = new EventEmitter<Recipe>();

    constructor() { }

    onRecipeSelect(recipe: Recipe) {
        this.selectedRecipe = recipe;
        this.onRecipeSelectEmitter.emit(recipe);

    }
}