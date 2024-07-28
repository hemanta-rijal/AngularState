import { createAction, props } from '@ngrx/store';
import { Book } from 'src/app/models/book';

// Load Books Actions
export const loadBooks = createAction('[Book] Load Books');
export const loadBooksSuccess = createAction('[Book] Load Books Success', props<{ books: Book[] }>());
export const loadBooksFailure = createAction('[Book] Load Books Failure', props<{ error: any }>());

// Add Book Actions
export const AddBook = createAction('[Book] Add Book', props<{ book: Book }>());
export const AddBookSuccess = createAction('[Book] Add Book Success', props<{ book: Book }>());
export const AddBookFailure = createAction('[Book] Add Book Failure', props<{ error: any }>());
