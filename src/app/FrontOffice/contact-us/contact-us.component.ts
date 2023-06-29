import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  constructor(private elementRef: ElementRef, private router:Router) {}  

  scrollToComponent() {
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
