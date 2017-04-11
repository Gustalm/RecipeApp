import { Ingredient } from "app/shared/Ingredient.model";

export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Orange', 10)
    ];

    constructor() {
    }

    ngOnInit() {
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    clearIngredients() {
        this.ingredients.length = 0;
    }
}