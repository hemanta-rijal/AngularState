import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as bookActions from './book.actions';
import { BookService } from '../book.service';
import { mergeMap, map, of, catchError } from 'rxjs';

@Injectable()
export class BookEffects {
  // Create the effect for the AddBook action
  addBook$ = createEffect(() => this.actions$.pipe(
    // Listen for the AddBook action type
    ofType(bookActions.AddBook),
    // For each AddBook action, call add on the book service
    // mergeMap allows multiple AddBook calls to be handled concurrently
    mergeMap(action => this.bookService.add(action.book).pipe(
      // If the addBook call is successful, dispatch the AddBookSuccess action with the book data
      map(book => bookActions.AddBookSuccess({ book })),
      // If the addBook call fails, dispatch the AddBookFailure action with the error
      catchError(error => of(bookActions.AddBookFailure({ error })))
    ))
  ));

  // Create the effect for the loadBooks action
  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType(bookActions.loadBooks),
    mergeMap(() => this.bookService.getAll().pipe(
      map(books => bookActions.loadBooksSuccess({ books })),
      catchError(error => of(bookActions.loadBooksFailure({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private bookService: BookService
  ) {}
}
