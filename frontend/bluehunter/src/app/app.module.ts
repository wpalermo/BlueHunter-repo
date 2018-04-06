import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksComponent } from './books/books.component';
import { ClientsComponent } from './clients/clients.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { BookService } from './book.service';
import { MessagesComponent } from './messages/messages.component';

import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BooksComponent,
    ClientsComponent,
    BookDetailComponent,
    ClientDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ) 
  ],
  providers: [
    BookService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
