import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "about", component: AboutComponent },
      { path: "projects", component: ProjectsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
