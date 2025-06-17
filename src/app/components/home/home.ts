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
  private bookService: BookService = inject(BookService);

  book$!: Observable<Book[]>;
  filteredBooks$!: Observable<Book[]>;

  searchTerm: string = '';

  constructor() {
    this.book$ = this.bookService.getBooks(); // something's wrong with this.book$
    this.filteredBooks$ = this.book$;
  }

  filterResults(): void {
    if (this.searchTerm) {
      this.filteredBooks$ = this.book$;
      return;
    }

    this.filteredBooks$ = this.filteredBooks$.pipe(
      map(books => books.filter(book => book.title.toLowerCase().includes(this.searchTerm.toLowerCase()))) 
    )
  }
}
