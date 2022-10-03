import { Action, createReducer, on } from '@ngrx/store';
import * as CoreActions from './core.actions';

export const coreFeatureKey = 'core';

export interface State {
  appId: string;

}

export const initialState: State = {
  appId: 'ng-core'
};

export const reducer = createReducer(
  initialState,

  on(CoreActions.loadCores, state => state),

);
