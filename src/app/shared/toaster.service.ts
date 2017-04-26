
import { Injectable } from "@angular/core";
import { ToasterConfig, ToasterService } from "angular2-toaster";

@Injectable()
export class Toaster {
    // private toasterDefaultConfig: ToasterConfig =
    // new ToasterConfig({
    //     showCloseButton: true,
    //     tapToDismiss: false,
    //     timeout: 0
    // });

    constructor(private toasterService: ToasterService){
    }

    popToast(type: string,title: string, body: string){
        this.toasterService.pop(type, title, body);
    }
}