import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { MoviesActions, MoviesActionTypes } from '../actions/movies.actions';

@Injectable()
export class MoviesEffects {

  @Effect()
  effect$ = this.actions$.ofType(MoviesActionTypes.LoadMoviess);

  constructor(private actions$: Actions) {}
}
