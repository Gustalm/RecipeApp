import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from "app/app-routing.module";
import { RecipeDetailResolver } from "app/recipes/recipe-detail/recipe-detail-resolver.service";
import { RecipeService } from "app/recipes/recipe.service";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { DataStorageService } from "app/shared/data-storage.service";
import { SignUpComponent } from "app/auth/signup/signup.component";
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from "app/auth/auth.service";
import { AuthGuard } from "app/auth/auth-guard.service";

import { ToasterModule, ToasterService } from 'angular2-toaster';
import { ToasterComponent } from './shared/toaster/toaster.component';
import { CanDeactivateRecipe } from "app/recipes/recipe-edit/can-deactivate-guard.service";
import { RecipesModule } from "app/recipes/recipes.module";

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    SignUpComponent,
    SigninComponent,
    ToasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ToasterModule,
    RecipesModule,
  ],
  providers: [
    RecipeService,
    ShoppingListService,
    RecipeDetailResolver,
    DataStorageService,
    AuthService,
    AuthGuard,
    ToasterService,
    CanDeactivateRecipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
