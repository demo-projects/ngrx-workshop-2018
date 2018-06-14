import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {FindMoviesError, FindMoviesSuccess, MoviesActionTypes, MoviesActions, GetMovieInfoSuccess} from '../actions/movies.actions';
import {catchError, map, switchMap, tap} from 'rxjs/internal/operators';
import {MovieFinderService} from '../services/movie-finder.service';
import {of} from 'rxjs/index';
import {Router} from '@angular/router';
import {MovieCollectionActionTypes} from '../actions/movie-collection.actions';

@Injectable()
export class MoviesEffects {

  // todo: if type MoviesActionTypes.FindMovies
  // get movies from server

  // todo: if type MoviesActionTypes.GetMovieInfo
  // find movie by id

  constructor(private actions$: Actions, private movies: MovieFinderService, private router: Router) {}
}
