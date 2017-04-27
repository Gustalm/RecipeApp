import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "app/auth/auth-guard.service";
import { CanDeactivateRecipe } from "app/recipes/recipe-edit/can-deactivate-guard.service";
import { HomeComponent } from "app/home/home.component";

const AppRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
    { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule', canLoad: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}