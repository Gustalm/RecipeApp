import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "app/auth/signin/signin.component";
import { SignUpComponent } from "app/auth/signup/signup.component";


const routes: Routes = [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignUpComponent }
    ]

@NgModule({
    declarations:[
    ],
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AuthRoutingModule{


}