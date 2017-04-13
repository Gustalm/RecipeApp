import { Component } from '@angular/core';
import { Menu } from './menu.enum';
import { ShoppingListService } from "./shopping-list/shopping-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ShoppingListService]
})
export class AppComponent {
  showRecipes = true;

  onMenuSelect(idMenu: number) {
    this.showRecipes = idMenu == Menu.Recipes ? true : false;
  }
}
