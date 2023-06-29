import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  @Output() scrollToHome = new EventEmitter<void>();
  @Output() scrollToAbout = new EventEmitter<void>();
  @Output() scrollToWhy = new EventEmitter<void>();
  @Output() scrollToContact = new EventEmitter<void>();
}
