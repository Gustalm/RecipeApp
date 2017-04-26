import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { RecipesComponent } from "app/recipes/recipes.component";
import { RecipeListComponent } from "app/recipes/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "app/recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";
import { EmptyRecipeComponent } from "app/recipes/empty-recipe/empty-recipe.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";
import { RecipesRoutingModule } from "app/recipes/recipes-routing.module";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        EmptyRecipeComponent,
        RecipeEditComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ]
})

export class RecipesModule {

}