import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedClassicModule } from './shared/shared-classic.module';
import { HomeComponent } from './features/home/home.component';
import { AboutPageComponent } from './features/about-page/about-page.component';
import { ActivityPageComponent } from './features/activity-page/activity-page.component';
import { ArtistPageComponent } from './features/artist-page/artist-page.component';

@NgModule({
  declarations: [
    AppComponent,
    // TODO transform those in modules when they get bigger
    HomeComponent,
    AboutPageComponent,
    ActivityPageComponent,
    ArtistPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedClassicModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
