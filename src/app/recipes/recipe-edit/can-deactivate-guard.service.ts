import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Recipe } from "app/recipes/recipe.model";
import { CanDeactivateComponent } from "app/recipes/recipe-edit/can-deactivate.interface";


export class CanDeactivateRecipe implements CanDeactivate<CanDeactivateComponent> {
    canDeactivate(component: CanDeactivateComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
        return component.CanDeactivate();
    }
}