import { Action, createReducer, on } from '@ngrx/store';
import * as BooksActions from './books.actions';

export const booksFeatureKey = 'books';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(BooksActions.loadBookss, state => state),

);
