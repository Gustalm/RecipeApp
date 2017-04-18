import { Recipe } from "app/recipes/recipe.model";
import { EventEmitter, OnInit, Injectable } from "@angular/core";
import { Ingredient } from "app/shared/Ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Injectable()
export class RecipeService implements OnInit {
    private recipes: Recipe[]

    selectedRecipe: Recipe;

    onRecipeSelectEmitter = new EventEmitter<Recipe>();

    constructor(private slService: ShoppingListService) {
        this.recipes =
            [new Recipe("Tasty Schinezel",
                "Awesome food this one",
                "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg",
                [new Ingredient("Bread", 1), new Ingredient("Tomatoes", 2)]),
            new Recipe("Pro Burguerzor deliciazor",
                "Just a hamburguer",
                "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg",
                [new Ingredient("Bread", 1), new Ingredient("Hamburguer", 2)])];
    }

    ngOnInit(): void {
    }

    onRecipeSelect(recipe: Recipe) {
        this.selectedRecipe = recipe;
        this.onRecipeSelectEmitter.emit(recipe);
    }

    getRecipes() {
        return this.recipes.slice();
    }

    sendRecipesToShoppingList(ingredients: Ingredient[]) {
        this.slService.showIngredients(ingredients);
    }

    getRecipeByName(name: string) {
        const recipe = this.recipes.find(
            (s) => {
                return s.name === name;
            }
        );
        return recipe;
    }
}