import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  constructor(private elementRef: ElementRef) {}   

  scrollToComponent() {
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
