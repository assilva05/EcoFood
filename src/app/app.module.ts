import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing'

import { FrontOfficeComponent } from './FrontOffice/frontOffice.component';
import { CheckOutComponent } from './CheckOut/checkOut.component';

import { NavComponent } from './FrontOffice/nav/nav.component';
import { HomeComponent } from './FrontOffice/home/home.component';
import { WhyUsComponent } from './FrontOffice/why-us/why-us.component';
import { SliderComponent } from './FrontOffice/slider/slider.component';
import { GifComponent } from './FrontOffice/gif/gif.component';
import { AboutUsComponent } from './FrontOffice/about-us/about-us.component';
import {NgOptimizedImage} from "@angular/common";
import { ApiComponent } from './GoogleMaps/api/api.component';


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
    CheckOutComponent,
    ApiComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
