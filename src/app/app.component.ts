import { Component } from '@angular/core';
import { Menu } from './menu.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipes = true;

  onMenuSelect(idMenu: number) {
    this.showRecipes = idMenu == Menu.Recipes ? true : false;
  }
}
