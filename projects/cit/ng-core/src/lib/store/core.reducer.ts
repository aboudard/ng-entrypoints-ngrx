import { Action, createReducer, on } from '@ngrx/store';
import * as CoreActions from './core.actions';

export const coreFeatureKey = 'core';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(CoreActions.loadCores, state => state),

);
