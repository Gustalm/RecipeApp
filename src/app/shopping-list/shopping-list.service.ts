import { Ingredient } from "app/shared/Ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {
    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    ingredientSelected = new Subject<number>();

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
        // this.ingredientsChanged.emit(this.getIngredients())
        this.updateViewIngredients(this.getIngredients())
    }

    updateIngredient(ingredient: Ingredient, id: number) {
        this.ingredients[id] = ingredient;
        this.updateViewIngredients(this.getIngredients())
    }

    deleteIngredient(id: number) {
        this.ingredients.splice(id, 1);
        this.updateViewIngredients(this.ingredients)
    }

    clearIngredients() {
        this.ingredients.length = 0;
        // this.ingredientsChanged.emit(this.getIngredients())
        this.updateViewIngredients(this.getIngredients())
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(id: number) {
        return this.ingredients[id];
    }

    showIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        // this.ingredientsChanged.emit(this.getIngredients())
        this.updateViewIngredients(this.getIngredients());
    }

    updateViewIngredients(ingredients: Ingredient[]){
        this.ingredientsChanged.next(ingredients.slice())
    }

    selectIngredient(id: number){
        this.ingredientSelected.next(id);
    }
}