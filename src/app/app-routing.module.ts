import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "app/recipes/recipes.component";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";
import { RecipeDetailResolver } from "app/recipes/recipe-detail/recipe-detail-resolver.service";
import { EmptyRecipeComponent } from "app/recipes/empty-recipe/empty-recipe.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";
import { SignUpComponent } from "app/auth/signup/signup.component";
import { SigninComponent } from "app/auth/signin/signin.component";

const AppRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: EmptyRecipeComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent, resolve: { recipe: RecipeDetailResolver } },
            { path: ':id/edit', component: RecipeEditComponent }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'signup', component: SignUpComponent},
    { path: 'signin', component: SigninComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}