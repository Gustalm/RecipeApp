import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app-routing.module";

import { ToasterModule } from 'angular2-toaster';
import { ToasterComponent } from './shared/toaster/toaster.component';
import { SharedModule } from "app/shared/shared.module";
import { AuthModule } from "app/auth/auth.module";
import { ErrorPageModule } from "app/error-page/error-page.module";
import { CoreModule } from "app/core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    ToasterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ToasterModule,
    SharedModule,
    AuthModule,
    ErrorPageModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
