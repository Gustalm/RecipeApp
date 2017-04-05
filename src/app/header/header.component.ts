import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Menu } from '../menu.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedMenu = new EventEmitter<number>();
  header = Menu;

  constructor() { }

  ngOnInit() {
  }

  onMenuSelect(idMenu: number) {
    this.selectedMenu.emit(idMenu);
  }
}
