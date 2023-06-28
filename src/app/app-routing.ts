import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { FrontOfficeComponent } from './FrontOffice/index';
import { CheckOutComponent } from './CheckOut/index';
import { HomeComponent } from './FrontOffice/home/home.component';
import { AboutUsComponent } from './FrontOffice/about-us/about-us.component';
import { GifComponent } from './FrontOffice/gif/gif.component';
import { SliderComponent } from './FrontOffice/slider/slider.component';
import { WhyUsComponent } from './FrontOffice/why-us/why-us.component';

export const routes: Routes = [
  { path: 'home', component: FrontOfficeComponent },
  { path: 'checkout', component: CheckOutComponent },
  
  { path: 'main', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'gif', component: GifComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'whyus', component: WhyUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];