import { Action, createReducer, on } from '@ngrx/store';
import * as CoreActions from './core.actions';
import * as fromBooks from './books.reducer';

export const coreFeatureKey = 'core';

export interface State {
  appId: string;
  [fromBooks.booksFeatureKey]: fromBooks.State;

}

export const initialState: State = {
  appId: 'ng-core',
  [fromBooks.booksFeatureKey]: fromBooks.initialState
};

export const reducer = createReducer(
  initialState,

  on(CoreActions.loadCores, state => state),

);
