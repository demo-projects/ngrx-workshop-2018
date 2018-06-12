import { Action } from '@ngrx/store';

export enum MoviesActionTypes {
  LoadMoviess = '[Movies] Load Moviess'
}

export class LoadMoviess implements Action {
  readonly type = MoviesActionTypes.LoadMoviess;
}

export type MoviesActions = LoadMoviess;
