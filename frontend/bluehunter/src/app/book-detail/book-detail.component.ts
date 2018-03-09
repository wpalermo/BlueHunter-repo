import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() book : Book;

  constructor(private bookService: BookService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBook();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.bookService.updateBook(this.book)
      .subscribe(() => this.goBack());
  }

  getBook(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id)
                    .subscribe(book => this.book = book);
  }

}
