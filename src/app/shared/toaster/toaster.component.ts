import { Component, OnInit } from '@angular/core';
import { ToasterConfig } from "angular2-toaster";

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {
  private toasterConfig: ToasterConfig;

  constructor() { }

  ngOnInit() {
    this.toasterConfig = new ToasterConfig({
      showCloseButton: true,
      tapToDismiss: true,
      closeHtml: '<p>Close</p>',
      timeout: 2000
    });
  }

}
