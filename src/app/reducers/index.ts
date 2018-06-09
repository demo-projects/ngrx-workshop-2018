import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromCore from '../core/reducers/core.reducer';

// add the core ui state here
export interface State {
  ui: fromCore.State;
}

// map core reducers here
export const reducers: ActionReducerMap<State> = {
  ui: fromCore.uiReducer
};


// if there is any meta uiReducer, put it here
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
