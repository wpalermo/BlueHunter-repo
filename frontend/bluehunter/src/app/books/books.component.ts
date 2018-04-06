import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { Logger } from 'angular2-logger/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];

  selectedBook: Book;

  constructor(private bookService: BookService) { }

  //Quase igual ao construtor, porém é mais seguro usar aqui pois espera ate que a classe esteja totalemtne carregada
  //com todas as dependencias
  ngOnInit() {
    this.getBooks();
  }

  //usada pelo evento (click)
  onSelect(book: Book): void{
    
    this.selectedBook = book;
  }

  //busca os livros usando servico
  getBooks(): void {
    //subscribe = aguarda o retorno do servico sem bloquear a pagina (callback funcion do ng5)
    this.bookService.getBooks()
                    .subscribe(books => this.books = books);
  }


  add(title: string): void {
    title = title.trim();

    if (!title) { return; }

    this.bookService.addBook({ title } as Book)
      .subscribe(book => {
        this.books.push(book);
      });
  }

  delete(book: Book): void{
    this.books = this.books.filter(b => b !== book);
    this.bookService.deleteBook(book).subscribe();
  }

}
