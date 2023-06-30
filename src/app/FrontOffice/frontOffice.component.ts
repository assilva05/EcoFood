import { Component, ViewChild } from "@angular/core";

import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { WhyUsComponent } from "./why-us/why-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { ApiGoogleMapsComponent } from "./api-google-maps/api-google-maps.component";

@Component({
    template: `
    <div class="overflow-x-clip bg-bottom bg-fundo back backdrop-blur-sm">
        <app-nav (scrollToHome)="scrollToHome()" (scrollToAbout)="scrollToAbout()" (scrollToWhy)="scrollToWhy()" (scrollToContact)="scrollToContact()" (scrollToAGM)="scrollToAGM()"></app-nav>
        <app-home #home></app-home>
        <app-why-us #why></app-why-us>
        <app-api-google-maps #agm></app-api-google-maps>
        <app-about-us #about></app-about-us>
        <app-gif></app-gif>
        <app-contact-us #contact></app-contact-us>
    <div>
    `,
    //styleUrls: ['./frontOffice.component.css']
})
export class FrontOfficeComponent {
    @ViewChild('home') homeComponent!: HomeComponent;
    @ViewChild('about') aboutUsComponent!: AboutUsComponent;
    @ViewChild('why') whyUsComponent!: WhyUsComponent;
    @ViewChild('contact') contactUsComponet!: ContactUsComponent;
    @ViewChild('agm') ApiGoogleMapsComponent!: ApiGoogleMapsComponent;

    scrollToHome() {
        this.homeComponent.scrollToComponent();
    }
    scrollToAbout() {
        this.aboutUsComponent.scrollToComponent();
    }
    scrollToWhy() {
        this.whyUsComponent.scrollToComponent();
    }
    scrollToContact() {
        this.contactUsComponet.scrollToComponent();
    }
    scrollToAGM() {
        this.ApiGoogleMapsComponent.scrollToComponent();
    }
}