import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBooks from './reducers';

export const selectBooksState = createFeatureSelector<fromBooks.BooksState>(
  fromBooks.booksFeatureKey
);

export const selectBooks = createSelector(
  selectBooksState,
  (state: fromBooks.BooksState) => state.books
);