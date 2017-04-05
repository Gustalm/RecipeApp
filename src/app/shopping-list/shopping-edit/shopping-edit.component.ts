import { Component, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";
import { Ingredient } from "app/shared/Ingredient.model";

@Component({
    selector: "app-shopping-edit",
    templateUrl: "shopping-edit.component.html",
    styleUrls: ["shopping-edit.component.css"]
})

export class ShoppingEditComponent {
    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;
    @Output() addIngredient = new EventEmitter<Ingredient>();
    @Output() clearIngredients = new EventEmitter<void>();

    constructor() {
    }

    onAdd() {
        this.addIngredient.emit(new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value))
    }

    onClear() {
        this.clearIngredients.emit();
    }
}