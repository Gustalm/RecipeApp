
import { NgModule } from "@angular/core";
import { HeaderComponent } from "app/core/header/header.component";
import { HomeComponent } from "app/core/home/home.component";
import { SharedModule } from "app/shared/shared.module";
import { AppRoutingModule } from "app/app-routing.module";
import { RecipeService } from "app/recipes/recipe.service";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { RecipeDetailResolver } from "app/recipes/recipe-detail/recipe-detail-resolver.service";
import { DataStorageService } from "app/shared/data-storage.service";
import { AuthService } from "app/auth/auth.service";
import { AuthGuard } from "app/auth/auth-guard.service";
import { ToasterService } from "angular2-toaster/src/toaster.service";
import { CanDeactivateRecipe } from "app/recipes/recipe-edit/can-deactivate-guard.service";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        // AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        RecipeService,
        ShoppingListService,
        RecipeDetailResolver,
        DataStorageService,
        AuthService,
        AuthGuard,
        ToasterService,
        CanDeactivateRecipe,
    ],
})
export class CoreModule {

}