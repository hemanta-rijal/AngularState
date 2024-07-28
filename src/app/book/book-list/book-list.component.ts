import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Book } from 'src/app/models/book';
import { loadBooks } from '../state/book.actions';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { BookService } from '../book.service';
import { selectBooks, selectBookError } from '../state/book.selector';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;
  error$: Observable<any>;
  constructor(
    private store: Store<AppState>
  ) {
    this.books$ = store.pipe(select(selectBooks));
    this.error$ = store.pipe(select(selectBookError));
  }
  ngOnInit() {
    this.store.dispatch(loadBooks());
  }
}
