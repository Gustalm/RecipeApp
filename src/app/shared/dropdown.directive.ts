import { Directive, ElementRef, Renderer2, HostListener, OnInit, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {
    constructor() {}

    ngOnInit() {
    }

    @HostBinding('class.open') toggleOpenClass = false;

    @HostListener('click') onDropdownClick(event: Event) {
        this.toggleOpenClass = !this.toggleOpenClass;
    }
}