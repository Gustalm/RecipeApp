import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { ActivatedRoute, Data, Params, Router } from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {

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

  onDeleteRecipe(){
    this.recipeService.delete(this.recipe.id);
    this.router.navigate(['/recipes']);
  }

  onShoppingListClick() {
    this.recipeService.sendRecipesToShoppingList(this.recipe.ingredients);
  }
}
