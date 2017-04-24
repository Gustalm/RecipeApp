import { Observable } from "rxjs/Observable";
import { FormControl } from "@angular/forms";

export class RecipeValidators {
    required2(control: FormControl): any | Observable<any> | Promise<any> {
        const promise = new Promise((resolve, reject) => {
            if (!control.value)
                resolve({ required2: true })
            else
                resolve(null)
        })
        return promise;
    }
}