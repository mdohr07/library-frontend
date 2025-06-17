import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { BookService } from '../../services/book-service';
import { Book } from '../../models/book';
import { Search } from '../../search/search';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    Search
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class Home {
  private bookService = inject(BookService);

  allBooks$!: Observable<Book[]>;
  filteredBooks$!: Observable<Book[]>;

searchTerm: string = '';

  constructor() {
    this.allBooks$ = this.bookService.getBooks(); // something's wrong with this.book$
    this.filteredBooks$ = this.allBooks$;
  }

  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    const lowercaseSearchterm = searchTerm.toLowerCase();

    this.filteredBooks$ = this.allBooks$.pipe(
      map(books => books.filter(book => book.title.toLowerCase().includes(lowercaseSearchterm)))
    )
  };
}
