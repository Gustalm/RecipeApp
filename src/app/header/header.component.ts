import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from "app/shared/data-storage.service";
import { Response } from '@angular/http';

import { Menu } from '../menu.enum';
import { RecipeService } from "app/recipes/recipe.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSaveData(){
    this.dataStorageService.storeData().subscribe((response: Response) => {
      console.log(response);
    });
  }

  onGetData(){
    this.dataStorageService.getRecipes();
  }
}
