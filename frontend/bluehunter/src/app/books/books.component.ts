import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];

  selectedBook: Book;


  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }


  onSelect(book: Book): void{
    this.selectedBook = book;
  }

  getBooks(): void {
    this.bookService.getBooks()
                    .subscribe(books => this.books = books);
  }



}
