// book.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from 'src/app/models/book';
import { BookState } from './book.reducers';

// Create a feature selector for the book state
export const selectBookState = createFeatureSelector<BookState>('book');

// Selector to get the list of books
export const selectBooks = createSelector(
  selectBookState,
  (state: BookState) => state.books
);

// Selector to get any error messages
export const selectBookError = createSelector(
  selectBookState,
  (state: BookState) => state.error
);
