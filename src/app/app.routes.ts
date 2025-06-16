import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { BookList } from './components/book-list/book-list';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'books', component: BookList }
];
