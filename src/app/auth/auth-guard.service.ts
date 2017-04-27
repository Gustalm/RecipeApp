import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private auth: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        let isAuthenticated = this.auth.isAuthenticated();

        if (!isAuthenticated) {
            this.router.navigate(['/signin']);
            return false;
        } else {
            return true;
        }
    }

    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['/signin']);
            return false;
        } else {
            return true;
        }
    }



}