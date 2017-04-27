import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from "app/app-routing.module";
import { RecipeDetailResolver } from "app/recipes/recipe-detail/recipe-detail-resolver.service";
import { RecipeService } from "app/recipes/recipe.service";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { DataStorageService } from "app/shared/data-storage.service";
import { AuthService } from "app/auth/auth.service";
import { AuthGuard } from "app/auth/auth-guard.service";

import { ToasterModule, ToasterService } from 'angular2-toaster';
import { ToasterComponent } from './shared/toaster/toaster.component';
import { CanDeactivateRecipe } from "app/recipes/recipe-edit/can-deactivate-guard.service";
import { SharedModule } from "app/shared/shared.module";
import { AuthModule } from "app/auth/auth.module";
import { HomeComponent } from './home/home.component';
import { ErrorPageModule } from "app/error-page/error-page.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToasterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ToasterModule,
    SharedModule,
    AuthModule,
    ErrorPageModule
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
  bootstrap: [AppComponent]
})
export class AppModule { }
