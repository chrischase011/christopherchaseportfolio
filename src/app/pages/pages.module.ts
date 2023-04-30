import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from '../components/hero/hero.component';
import { NgParticlesModule } from "ng-particles";

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgParticlesModule
  ]
})
export class PagesModule { }
