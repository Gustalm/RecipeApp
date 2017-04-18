import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Menu } from '../menu.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
