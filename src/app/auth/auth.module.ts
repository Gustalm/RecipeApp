import { NgModule } from "@angular/core/";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { SignUpComponent } from "app/auth/signup/signup.component";
import { SigninComponent } from "app/auth/signin/signin.component";
import { AuthRoutingModule } from "app/auth/auth-routing.module";



@NgModule({
    declarations: [
        SignUpComponent,
        SigninComponent,
    ],
    imports: [
        FormsModule,
        AuthRoutingModule
    ],
    exports: [

    ]
})
export class AuthModule {

}