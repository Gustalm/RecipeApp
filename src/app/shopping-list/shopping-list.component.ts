import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from "../shared/Ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      })
    );
    this.ingredients = this.shoppingListService.getIngredients();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  onIngredientClick(index: number) {
    this.shoppingListService.selectIngredient(index);
  }
}
