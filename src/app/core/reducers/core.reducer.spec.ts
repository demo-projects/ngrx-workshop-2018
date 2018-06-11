import { uiReducer, initialState } from './core.reducer';
import {ToggleLoader} from '../actions/core.actions';

describe('Core Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = uiReducer(initialState, action);

      expect(result).toBe(initialState);
    });

    it('should toggle loading on', () => {
      const result = uiReducer(initialState, new ToggleLoader(false));

      expect(result).toEqual({ ...initialState, loading: false });
    });

  });
});
