import {Routes} from '@angular/router';
import {AuthComponent} from './auth/containers/auth.component';
import {AuthGuard} from './auth/services/auth.guard';

export const routes: Routes = [
  {path: '', component: AuthComponent, pathMatch: 'full'},
  {
    path: 'movies',
    loadChildren: './movies/movies.module#MoviesModule',
    canActivate: [AuthGuard]
  }
];
