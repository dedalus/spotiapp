import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { SearchComponent } from './components/search/search.component'
import { CountryComponent } from './components/country/country.component'

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'country', component: CountryComponent },
    { path: '', pathMatch: 'full', redirectTo:'home'},
    { path: '**', pathMatch: 'full', redirectTo:'home'}
];