import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CountryComponent } from './components/country/country.component';

import { ROUTES } from './app.routes';
import { SpotifyService } from './services/spotify.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    CountryComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {useHash: true })   
  ],
  providers: [ 
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
