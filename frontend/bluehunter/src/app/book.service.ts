import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class BookService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private bookUrl = 'api/books';


  private log(message: string){
    this.messageService.add('BookService: ' + message);
  }

  getBooks(): Observable<Book[]>{
    this.messageService.add('BookService: found books');


    return this.http.get<Book[]>(this.bookUrl)
               .pipe(
               catchError(this.handleError('getBooks', []))
             );
  }



  getBook(id: number): Observable<Book> {
      const url = `${this.bookUrl}/${id}`;

      return this.http.get<Book>(url)
                      .pipe(
                        tap(_ => this.log(`book found id=${id}`)),
                        catchError(this.handleError<Book>(`getBook id=${id}`))
                      );
  }

  updateBook (book: Book): Observable<any>{
    debugger;
    return this.http.put(this.bookUrl, book, httpOptions).pipe(
      tap(_ => this.log(`updated book id=${book.id}` ) ),
      catchError(this.handleError<any>('updateBook') )
      
    )
  }

  addBook (book: Book): Observable<Book> {
    return this.http.post<Book>(this.bookUrl, book, httpOptions).pipe(
      tap((book: Book) => this.log(`added book w/ id=${book.id}`)),
      catchError(this.handleError<Book>('addBook'))
    );
  }

  deleteBook(book: Book | number): Observable<Book> {
    const id = typeof book === 'number' ? book : book.id;
    const url = `${this.bookUrl}/${id}`;

    return this.http.delete<Book>(url, httpOptions).pipe(
      tap(_ => this.log(`delete book id=${id}`)),
      catchError(this.handleError<Book>('deleteBook'))
    );
  }



  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
