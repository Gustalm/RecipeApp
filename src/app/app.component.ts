import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.enum';
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyC3SYqrsn6prdbpRctXI9FyVkyN9dVExg4",
      authDomain: "ng-recipe-book-9e268.firebaseapp.com",
    })
  }
}
