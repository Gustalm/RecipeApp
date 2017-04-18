import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"
import { Recipe } from "app/recipes/recipe.model";
import { Observable } from "rxjs/Observable";
import { RecipeService } from "app/recipes/recipe.service";
import { Injectable } from "@angular/core";

@Injectable()
export class RecipeDetailResolver implements Resolve<Recipe>{
    constructor(private recipeService: RecipeService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe | Observable<Recipe> | Promise<Recipe> {
        return this.recipeService.getRecipeByName(route.params["name"]);
    }
}