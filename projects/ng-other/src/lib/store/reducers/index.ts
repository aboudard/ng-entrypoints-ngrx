import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer
} from '@ngrx/store';


export const otherFeatureKey = 'other';

export interface OtherState {
  other: string;
}

export const initialState: OtherState = {
  other: 'other state'
};

export const reducers = createReducer(
  initialState,
);


