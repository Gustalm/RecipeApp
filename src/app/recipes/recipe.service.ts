import { Recipe } from "app/recipes/recipe.model";
import { EventEmitter, OnInit, Injectable } from "@angular/core";
import { Ingredient } from "app/shared/Ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";
import { Http, Response } from '@angular/http';
import 'rxjs/Rx'
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class RecipeService implements OnInit {
    private recipes: Recipe[]
    onRecipesUpdate = new Subject<Recipe[]>();
    connectionString = 'https://ng-recipe-book-9e268.firebaseio.com/recipes.json?auth=' + this.authService.getToken();

    constructor(private slService: ShoppingListService, private http: Http, private authService: AuthService) {
        this.recipes =
            [new Recipe(1, "Tasty Schinezel",
                "Awesome food this one",
                "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg",
                [new Ingredient("Bread", 1), new Ingredient("Tomatoes", 2)]),
            new Recipe(2, "Pro Burguerzor deliciazor",
                "Just a hamburguer",
                "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg",
                [new Ingredient("Bread", 1), new Ingredient("Hamburguer", 2)])];
    }

    ngOnInit(): void {
    }

    emitRecipes() {
        this.onRecipesUpdate.next(this.recipes.slice());
    }

    getRecipes() {
        return this.http.get(this.connectionString)
            .map((response: Response) => {
                const data = response.json();
                return data;
            })
        // return this.recipes.slice();
    }

    getRecipesStatic() {
        return this.recipes.slice();
    }

    sendRecipesToShoppingList(ingredients: Ingredient[]) {
        this.slService.showIngredients(ingredients);
    }

    getRecipeById(id: number) {
        const recipe = this.recipes.find(
            (s) => {
                return s.id === id;
            }
        );
        return recipe;
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.emitRecipes();
        // return this.postPutRecipe(recipe);
    }

    updateRecipe(recipe: Recipe) {
        let index = this.recipes.findIndex(x => x.id == recipe.id)
        this.recipes[index] = recipe;
        this.emitRecipes();
        // return this.postPutRecipe(recipe);
    }

    // postPutRecipe(recipe: Recipe){
    //     return this.http.put(this.connectionString, recipe).map((response: Response) => {
    //         let recipe: Recipe = response.json()
    //         console.log(recipe);
    //         return recipe;
    //     });
    // }

    delete(id: number) {
        let index = this.recipes.findIndex(x => x.id == id);
        this.recipes.splice(index, 1);
        this.emitRecipes();
    }

    clear() {
        this.recipes = [];
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.emitRecipes();
    }
}