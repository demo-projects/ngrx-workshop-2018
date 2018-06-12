import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesComponent} from './containers/movies.component';
import {MovieFinderComponent} from './containers/movie-finder.component';
import {MovieDetailsComponent} from './components/movie-details.component';
import {RouterModule} from '@angular/router';
import {MovieCollectionComponent} from './containers/movie-collection.component';
import { StoreModule } from '@ngrx/store';
import * as fromMovies from './reducers/movies.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './effects/movies.effects';
import {MovieFinderService} from './services/movie-finder.service';
import {HttpClientModule} from '@angular/common/http';
import {MovieListComponent} from './components/movie-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: MovieCollectionComponent},
      {path: 'find', component: MovieFinderComponent},
      {path: ':id', component: MovieDetailsComponent},
    ]),
    StoreModule.forFeature('movies', fromMovies.reducers),
    EffectsModule.forFeature([MoviesEffects])
  ],
  providers: [MovieFinderService],
  declarations: [MoviesComponent, MovieFinderComponent, MovieDetailsComponent, MovieCollectionComponent, MovieListComponent]
})

export class MoviesModule {}
