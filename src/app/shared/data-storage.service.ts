import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { RecipeService } from "app/recipes/recipe.service";
import { Recipe } from "app/recipes/recipe.model";
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class DataStorageService {
    connectionString = 'https://ng-recipe-book-9e268.firebaseio.com/recipes.json';
    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) { }

    storeData() {
        const token = this.authService.getToken();

        return this.http.put(this.connectionString + '?auth=' + token, this.recipeService.getRecipesStatic());
    }

    getRecipes() {
        const token = this.authService.getToken();

        this.http.get(this.connectionString + '?auth=' + token)
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