import { createReducer,on } from "@ngrx/store";
import { AddBook, 
  AddBookFailure, 
  AddBookSuccess, 
  loadBooks, 
  loadBooksSuccess,
  loadBooksFailure 
} from "./book.actions";
import { Book } from "src/app/models/book";

export const initialState: Book[] = [];

export const BookReducer = createReducer(
  initialState,
  on(AddBook, (state ) => {return state}),
  on(AddBookSuccess,(state,book)=>[...state,book]),
  on(AddBookFailure,(state,{error})=>{
    console.log(error);
    return state
  }),


  on(loadBooksSuccess, (state, { books }) => ({ ...state, books, error: null })),
  on(loadBooksFailure, (state, { error }) => ({ ...state, error }))
)