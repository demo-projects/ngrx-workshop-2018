import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesComponent} from './containers/movies.component';
import {MovieFinderComponent} from './components/movie-finder.component';
import {MovieDetailsComponent} from './components/movie-details.component';
import {RouterModule} from '@angular/router';
import {MovieCollectionComponent} from './components/movie-collection.component';
import { StoreModule } from '@ngrx/store';
import * as fromMovies from './reducers/movies.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './effects/movies.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: MovieCollectionComponent},
      {path: 'find', component: MovieFinderComponent},
      {path: ':id', component: MovieDetailsComponent},
    ]),
    StoreModule.forFeature('movies', fromMovies.reducer),
    EffectsModule.forFeature([MoviesEffects])
  ],
  declarations: [MoviesComponent, MovieFinderComponent, MovieDetailsComponent, MovieCollectionComponent]
})

export class MoviesModule {}
