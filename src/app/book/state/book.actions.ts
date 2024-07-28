import { createAction,props } from "@ngrx/store";
import { Book } from "src/app/models/book";


export const loadBooks = createAction('[Book] Load Books');
export const loadBooksSuccess = createAction('[Book] Load Books Success', props<{ books: Book[] }>());
export const loadBooksFailure = createAction('[Book] Load Books Failure', props<{ error: any }>());


export const AddBook = createAction('[Book] Add Book',props<Book>());
export const AddBookSuccess = createAction('[Book] Add Book Success',props<Book>())
export const AddBookFailure = createAction('[Book] Add Book Failure',props<{error:any}>())


