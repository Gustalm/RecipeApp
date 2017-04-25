import { Recipe } from "app/recipes/recipe.model";
import { EventEmitter, OnInit, Injectable } from "@angular/core";
import { Ingredient } from "app/shared/Ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";
import { Http, Response } from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class RecipeService implements OnInit {
    private recipes: Recipe[]
    onRecipesUpdate = new Subject<Recipe[]>();
    connectionString = 'https://ng-recipe-book-9e268.firebaseio.com/recipes.json';

    constructor(private slService: ShoppingListService, private http: Http) {
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
                console.log(response);
                return response.json()
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
        // return this.http.post(this.connectionString, recipe);
    }

    updateRecipe(recipe: Recipe) {
        let index = this.recipes.findIndex(x => x.id == recipe.id)
        this.recipes[index] = recipe;
        this.emitRecipes();
        // return this.http.put(this.connectionString, recipe);
    }

    delete(id: number) {
        let index = this.recipes.findIndex(x => x.id == id);
        this.recipes.splice(index, 1);
        this.emitRecipes();
    }

    clear(){
        this.recipes = [];
    }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.emitRecipes();
    }
}