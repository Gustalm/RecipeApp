import { Component, ViewChild, ElementRef, Output, EventEmitter, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

import { Ingredient } from "app/shared/Ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
    selector: "app-shopping-edit",
    templateUrl: "shopping-edit.component.html",
    styleUrls: ["shopping-edit.component.css"]
})

export class ShoppingEditComponent implements OnInit, OnDestroy {
    @ViewChild('formSubmit') form: NgForm;
    ingredient = new Ingredient('', 0);
    subscription: Subscription
    editMode = false;
    idEditItem: number;

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit(): void {
        this.subscription = this.shoppingListService.ingredientSelected.subscribe((id: number) => {
            this.editMode = true;
            this.idEditItem = id;
            this.ingredient = this.shoppingListService.getIngredient(id);
        })
    }

    onClear() {
        this.form.reset();
        this.form.control.patchValue({
            amountGroup: {
                amount: 1
            }
        })
    }

    onSubmit() {
        const ingredient = new Ingredient(this.form.value.name, this.form.value.amountGroup.amount);
        if (this.editMode)
            this.shoppingListService.updateIngredient(ingredient, this.idEditItem)
        else
            this.shoppingListService.addIngredient(ingredient);

        console.log(this.form);
        this.onClear();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe;
    }
    // onClear(form: FormGroup) {
    //     form.reset();
    // }

    // onSubmit(ngForm: FormGroup) {
    //     const ingredient = new Ingredient(ngForm.value.name, ngForm.value.amount);
    //     this.shoppingListService.addIngredient(ingredient);
    //     console.log(ngForm);
    //     this.onClear(ngForm);
    // }
}