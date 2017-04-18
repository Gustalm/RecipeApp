import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { ActivatedRoute, Data, Params } from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // usando resolver
    // this.route.data.subscribe(
    //   (data: Data) => {
    //     this.recipe = data['recipe'];
    //   }) 

      this.route.params.subscribe((data: Params) => {
        this.recipe = this.recipeService.getRecipeById(+data['id']);
      })
  }

  onShoppingListClick() {
    this.recipeService.sendRecipesToShoppingList(this.recipe.ingredients);
  }
}
