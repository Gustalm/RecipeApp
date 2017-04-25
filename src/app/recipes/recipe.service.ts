import { Recipe } from "app/recipes/recipe.model";
import { EventEmitter, OnInit, Injectable } from "@angular/core";
import { Ingredient } from "app/shared/Ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService implements OnInit {
    private recipes: Recipe[]
    onRecipesUpdate = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService) {
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
    }

    updateRecipe(recipe: Recipe) {
        let index = this.recipes.findIndex(x => x.id == recipe.id)
        this.recipes[index] = recipe;
        this.emitRecipes();
    }

    delete(id: number) {
        let index = this.recipes.findIndex(x => x.id == id);
        this.recipes.splice(index,1);
        this.emitRecipes();
    }
}