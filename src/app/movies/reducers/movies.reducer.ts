import { Action } from '@ngrx/store';
import { MoviesActions, MoviesActionTypes } from '../actions/movies.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: MoviesActions): State {
  switch (action.type) {

    case MoviesActionTypes.LoadMoviess:
      return state;


    default:
      return state;
  }
}
