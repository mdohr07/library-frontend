import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { BookList } from './components/book-list/book-list';
import { Search } from './search/search';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'books', component: BookList },
  { path: 'search', component: Search}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
