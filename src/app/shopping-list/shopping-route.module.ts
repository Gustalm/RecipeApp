import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { AuthGuard } from "app/auth/auth-guard.service";

const shoppingRoutes: Routes = [
    {path: '', component: ShoppingListComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(shoppingRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ShoppingRouteModule {

}