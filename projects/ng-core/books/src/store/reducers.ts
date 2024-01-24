import { createReducer, on } from '@ngrx/store';
import { Book } from '../dto/book';

export const booksFeatureKey = 'bookstore';

export interface BooksState {
  books: Book[];
}

export const initialState: BooksState = {
  books: [
    {
        id: 1,
        title: 'Angular Essentials',
    },
    {
        id: 2,
        title: 'Angular in Action',
    }
  ]
};

export const reducer = createReducer(
  initialState
);