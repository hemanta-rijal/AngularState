import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Book } from 'src/app/models/book';
import { AddBook } from '../state/book.actions';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;

  constructor(
    private store: Store<AppState>, 
    private bookService: BookService
  ) {
    this.books$ = store.pipe(select('book'))
  }
  ngOnInit() {
    // this.books$
  }
}
