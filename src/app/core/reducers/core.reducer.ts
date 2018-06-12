import {CoreActions, CoreActionTypes} from '../actions/core.actions';
import {createSelector} from '@ngrx/store';

// define the initial state structure
export interface State {
  loading: boolean;
  notifications: string[];
}

// initiate the state
export const initialState: State = {
  loading: false,
  notifications: []
};

// create uiReducer
export function uiReducer(state = initialState, action: CoreActions): State {
  switch (action.type) {

    case CoreActionTypes.ToggleLoader:
      return {...state, loading: action.payload};

    case CoreActionTypes.AddNotification:
      return {...state, notifications: [action.payload, ...state.notifications]};

    case CoreActionTypes.RemoveNotification:
      return {...state, notifications: state.notifications.slice(0, -1)};

    default:
      return state;
  }
}

// selectors
export const getUi = (state) => state.ui;

export const isLoading = createSelector(
  getUi,
  (ui: State) => ui.loading
);
export const getNotifications = createSelector(
  getUi,
  (ui: State) => ui.notifications
);
