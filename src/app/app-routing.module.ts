import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { BookList } from './components/book-list/book-list';
import { Search } from './search/search';
import { Form } from './form/form';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'books', component: BookList },
  { path: 'search', component: Search },
  { path: 'form', component: Form } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
