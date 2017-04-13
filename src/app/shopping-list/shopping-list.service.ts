import { Ingredient } from "app/shared/Ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Orange', 10)
    ];

    constructor() {
    }

    ngOnInit() {
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.getIngredients())
    }

    clearIngredients() {
        this.ingredients.length = 0;
        this.ingredientsChanged.emit(this.getIngredients())
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    showIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.getIngredients());
    }
}