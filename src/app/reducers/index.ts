import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';

// add the core ui state here
export interface State {

}

// map core reducers here
export const reducers: ActionReducerMap<State> = {};


// if there is any meta reducer, put it here
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
