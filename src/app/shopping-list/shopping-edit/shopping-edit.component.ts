import { Component, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";
import { Ingredient } from "app/shared/Ingredient.model";
import { ShoppingListService } from "../shopping-list.service";
import { FormGroup } from "@angular/forms";

@Component({
    selector: "app-shopping-edit",
    templateUrl: "shopping-edit.component.html",
    styleUrls: ["shopping-edit.component.css"]
})

export class ShoppingEditComponent {
    ingredient = new Ingredient('',0);
    

    constructor(private shoppingListService: ShoppingListService) {
    }

    onAdd() {
        this.shoppingListService.addIngredient(this.ingredient);
    }

    onClear(form: FormGroup) {
        form.reset();
    }

    onSubmit(ngForm: FormGroup){
        console.log(ngForm);
    }
}