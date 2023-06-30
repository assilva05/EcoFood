import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { FrontOfficeComponent } from './FrontOffice/index';
import { HomeComponent } from './FrontOffice/home/home.component';
import { AboutUsComponent } from './FrontOffice/about-us/about-us.component';
import { GifComponent } from './FrontOffice/gif/gif.component';
import { SliderComponent } from './FrontOffice/slider/slider.component';
import { WhyUsComponent } from './FrontOffice/why-us/why-us.component';
import { ContactUsComponent } from './FrontOffice/contact-us/contact-us.component';
import { ApiGoogleMapsComponent } from './FrontOffice/api-google-maps/api-google-maps.component';

export const routes: Routes = [
  { path: 'home', component: FrontOfficeComponent },
  
  { path: 'main', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'gif', component: GifComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'whyus', component: WhyUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'apigooglemaps', component: ApiGoogleMapsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];