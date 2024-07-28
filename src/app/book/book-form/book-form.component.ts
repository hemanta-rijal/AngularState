import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { select, Store } from '@ngrx/store';
import { Book } from 'src/app/models/book';
import { AddBook } from '../state/book.actions';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  bookForm: FormGroup = new FormGroup({})
  books$:Observable<Book[]>;

 

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder

  ){
    this.books$ = store.pipe(select('book'))
  }

  onSubmit(){
    if(this.bookForm.valid){
      let book: Book = this.bookForm.value;
      console.log(book);
      let id = Date.now();
      book.id = id.toString();
      console.log('valid')

      //dispatch the action
      this.store.dispatch(AddBook(book))

      
    }
    console.log('not valid')
      

      
      
  }

  ngOnInit():void{
    this.bookForm = this.formBuilder.group({
      'title':['',Validators.required],
      'author':['',Validators.required],
      'publication_year':['',Validators.required],
      'genre':['',Validators.required],
      'description':['',Validators.required],
      'cover_image':['',Validators.required]
    })
  }
}
