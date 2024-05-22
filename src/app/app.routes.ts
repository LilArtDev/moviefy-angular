import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MovieInfoComponent } from './components/pages/movie-info/movie-info.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movie', component: MovieInfoComponent },
];
