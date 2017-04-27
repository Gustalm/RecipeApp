import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorPageComponent } from "app/error-page/error-page.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }
]

@NgModule({
    declarations: [
        ErrorPageComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ]
})
export class ErrorPageModule {

}