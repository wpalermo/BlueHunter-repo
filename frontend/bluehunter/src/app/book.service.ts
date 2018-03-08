import { Injectable } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-books';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BookService {

  constructor() { }


  getBooks(): Observable<Book[]>{
    return of(BOOKS);
  }

}
