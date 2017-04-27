import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "app/auth/auth-guard.service";
import { CanDeactivateRecipe } from "app/recipes/recipe-edit/can-deactivate-guard.service";

const AppRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}