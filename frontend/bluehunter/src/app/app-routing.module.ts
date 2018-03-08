import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { BooksComponent } from './books/books.component'; 


const routes : Routes = [
 // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'clients', component: ClientsComponent },
  { path: 'books', component: BooksComponent},
  { path: 'dashboard', component: DashboardComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], 
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
