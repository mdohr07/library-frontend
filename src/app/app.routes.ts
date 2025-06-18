import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { BookList } from './components/book-list/book-list';
import { Search } from './search/search';
import { Form } from './form/form';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'books', component: BookList },
  { path: 'search', component: Search },
  { path: 'form', component: Form}
];
