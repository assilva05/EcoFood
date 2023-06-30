import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing'

import { FrontOfficeComponent } from './FrontOffice/frontOffice.component';

import { NavComponent } from './FrontOffice/nav/nav.component';
import { HomeComponent } from './FrontOffice/home/home.component';
import { WhyUsComponent } from './FrontOffice/why-us/why-us.component';
import { GifComponent } from './FrontOffice/gif/gif.component';
import { AboutUsComponent } from './FrontOffice/about-us/about-us.component';
import { SliderComponent } from './FrontOffice/slider/slider.component';
import {NgOptimizedImage} from "@angular/common";
import { ContactUsComponent } from './FrontOffice/contact-us/contact-us.component';
import { ApiGoogleMapsComponent } from './FrontOffice/api-google-maps/api-google-maps.component';


@NgModule({
  declarations: [
    AppComponent,
    FrontOfficeComponent,
    NavComponent,
    HomeComponent,
    AboutUsComponent,
    GifComponent,
    WhyUsComponent,
    SliderComponent,
    ContactUsComponent,
    ApiGoogleMapsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    HttpClientModule,
    GoogleMapsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
