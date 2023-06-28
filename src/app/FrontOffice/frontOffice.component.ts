import { Component, ViewChild } from "@angular/core";

import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { WhyUsComponent } from "./why-us/why-us.component";

@Component({
    template: `
    <div class="overflow-x-clip bg-bottom bg-sm-fundo back backdrop-blur-sm">
        <app-nav (scrollToHome)="scrollToHome()" (scrollToAbout)="scrollToAbout()" (scrollToWhy)="scrollToWhy()"></app-nav>
        <app-home #home></app-home>
        <app-why-us #why></app-why-us>
        <app-slider></app-slider>
        <app-gif></app-gif>
        <app-about-us #about></app-about-us>
    <div>
    `,
    //styleUrls: ['./frontOffice.component.css']
})
export class FrontOfficeComponent {
    @ViewChild('home') homeComponent!: HomeComponent;
    @ViewChild('about') aboutUsComponent!: AboutUsComponent;
    @ViewChild('why') whyUsComponent!: WhyUsComponent;

    scrollToHome() {
        this.homeComponent.scrollToComponent();
    }
    scrollToAbout() {
        this.aboutUsComponent.scrollToComponent();
    }
    scrollToWhy() {
        this.whyUsComponent.scrollToComponent();
    }
}