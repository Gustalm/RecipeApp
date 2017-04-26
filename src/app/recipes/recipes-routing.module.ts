import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "app/recipes/recipes.component";
import { EmptyRecipeComponent } from "app/recipes/empty-recipe/empty-recipe.component";
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";
import { AuthGuard } from "app/auth/auth-guard.service";
import { RecipeDetailResolver } from "app/recipes/recipe-detail/recipe-detail-resolver.service";
import { CanDeactivateRecipe } from "app/recipes/recipe-edit/can-deactivate-guard.service";

const routes: Routes = [
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: EmptyRecipeComponent },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
            { path: ':id', component: RecipeDetailComponent, resolve: { recipe: RecipeDetailResolver } },
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard], canDeactivate: [CanDeactivateRecipe] }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class RecipesRoutingModule {

}