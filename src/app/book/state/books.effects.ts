import { Injectable } from "@angular/core";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import * as bookActions from './book.actions';
import { BookService } from "../book.service";
import { mergeMap, map, of, catchError } from "rxjs";

@Injectable()
export class BookEffects {
  // it creates the effects when addbook action triggered
  addBook$ = createEffect(() => this.actions$.pipe(
    //listen the active type of AddBook
    ofType(bookActions.AddBook),
    //for each AddBook action, call AddBook on the book service
    //mergemap allows multilple AddBook calls.
    mergeMap(
      (action) => this.bookService.add(action)
        .pipe(
          //it the addbook call is successful, disptach the AddBookSuccess action with the book data
          map(book => bookActions.AddBookSuccess(book)),

          //if the AddBook call fails, dispatch 'AddBookFailure' action with the error
          catchError((error) => of(bookActions.AddBookFailure({ error })))
        )
    )
  ));

  constructor(
    private actions$: Actions,
    private bookService: BookService
  ) {

  }

}