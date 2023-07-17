import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from '../components/hero/hero.component';
import { NgParticlesModule } from "ng-particles";
import { ProjectsComponent } from './projects/projects.component';
import { AboutDescriptionComponent } from '../components/about-description/about-description.component';

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    HeroComponent,
    ProjectsComponent,
    AboutDescriptionComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgParticlesModule
  ]
})
export class PagesModule { }
