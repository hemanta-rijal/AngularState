import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import {HttpClient} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl="http://localhost:3000";

  // private books:Book[]=[];

  constructor(private http:HttpClient) { }

  add(book:Book):Observable<Book>{
    return this.http.post<Book>(this.apiUrl+'/book',book)
  }
  getAll():Observable<Book[]>{
    return this.http.get<Book[]>(this.apiUrl+'/books')
  }
}
