import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipes/recipe.model";

@Injectable()
export class DataStorageService {
    connectionString = 'https://ng-recipe-book-9e268.firebaseio.com/recipes.json';
    constructor(private http: Http, private recipeService: RecipeService) { }

    storeData() {
        return this.http.put(this.connectionString, this.recipeService.getRecipesStatic());
    }

    getRecipes() {
        this.http.get(this.connectionString)
            .map((response: Response) => {
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            })
            .subscribe((recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            });
    }

}