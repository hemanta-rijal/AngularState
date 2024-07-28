import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookService } from './book.service';
import { BookReducer } from './state/book.reducers';
import { BookEffects } from './state/books.effects';

@NgModule({
  declarations: [
    BookListComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('book', BookReducer),
    EffectsModule.forFeature([BookEffects])
  ],
  providers: [BookService]
})
export class BookModule { }
