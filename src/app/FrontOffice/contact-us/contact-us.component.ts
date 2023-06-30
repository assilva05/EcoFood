import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  constructor(private elementRef: ElementRef, private fb: FormBuilder) {}   

  scrollToComponent() {
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
  };

  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Admin',
    from_email: '',
    from_phone: '',
    message: '',
  });

  async send(){
    emailjs.init('KeZ0VRlR9aI9nhEDm');
    let response = await emailjs.send("service_j36r2ln","template_3a5me8a",{
    from_name: this.form.value.from_name,
    to_name: this.form.value.to_name,
    from_email: this.form.value.from_email,
    from_phone: this.form.value.from_phone,
    message: this.form.value.message,
    });

    this.form.reset();
  }
}