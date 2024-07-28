// book.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { AddBook, AddBookSuccess, AddBookFailure, loadBooksSuccess, loadBooksFailure } from './book.actions';
import { Book } from 'src/app/models/book';

export interface BookState {
  books: Book[];
  error: any;
}

export const initialState: BookState = {
  books: [],
  error: null
};

export const BookReducer = createReducer(
  initialState,
  on(AddBook, (state) => ({ ...state })),
  on(AddBookSuccess, (state, { book }) => ({
    ...state,
    books: [...state.books, book],
    error: null
  })),
  on(AddBookFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(loadBooksSuccess, (state, { books }) => ({
    ...state,
    books,
    error: null
  })),
  on(loadBooksFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
