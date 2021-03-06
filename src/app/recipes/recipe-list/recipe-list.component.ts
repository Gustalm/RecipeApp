import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from "../recipe.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
   this.subscription = this.recipeService.onRecipesUpdate.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    })

    this.recipes = this.recipeService.getRecipesStatic();

    // this.recipeService.getRecipes().subscribe((response) =>{
    //   this.recipes = response;
    // });
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
    // this.router.navigate(['../','new'])
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
