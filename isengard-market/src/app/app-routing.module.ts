import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './features/about-page/about-page.component';
import { ActivityPageComponent } from './features/activity-page/activity-page.component';
import { ArtistPageComponent } from './features/artist-page/artist-page.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'activity',
    component: ActivityPageComponent
  },
  {
    path: 'artist',
    component: ArtistPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
