import { Observable } from "rxjs/Observable";

export interface CanDeactivateComponent {
    CanDeactivate(): boolean | Promise<boolean> | Observable<boolean>
}