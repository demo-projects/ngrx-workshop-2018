import {Action} from '@ngrx/store';

// define action type names
export enum CoreActionTypes {
  ToggleLoader       = '[Core] Toggle loader',
  AddNotification    = '[Core] Add notification',
  RemoveNotification = '[Core] Remove notification',
}

// construct actions
interface CoreAction extends Action {
  payload?: any;
}

export class ToggleLoader implements CoreAction {
  readonly type = CoreActionTypes.ToggleLoader;

  constructor(public payload: boolean) {
  }
}

export class ShowNotification implements CoreAction {
  readonly type = CoreActionTypes.AddNotification;

  constructor(public payload: string) {
  }
}

export class RemoveNotification implements CoreAction {
  readonly type = CoreActionTypes.RemoveNotification;
}

// export union type
export type CoreActions = ToggleLoader | ShowNotification | RemoveNotification;
