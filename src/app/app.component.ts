import { Component } from '@angular/core';
import { Menu } from './menu.enum';
import { RecipeService } from "app/services/recipe.service";
import { ShoppingListService } from "app/services/shopping-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RecipeService, ShoppingListService]
})
export class AppComponent {
  showRecipes = true;

  onMenuSelect(idMenu: number) {
    this.showRecipes = idMenu == Menu.Recipes ? true : false;
  }
}
