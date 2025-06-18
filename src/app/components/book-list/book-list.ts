import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book-service';
import { Book } from '../../models/book';


@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss'
})

export class BookList implements OnInit {
  
books: Book[] = [];

constructor(private bookService: BookService) {}

ngOnInit(): void { // von OnInit-Schnittstelle (implements OnInit) 
  this.bookService.getBooks().subscribe({ // Subscribe - auf Daten reagieren, sobald sie ankommen
    next: (data) => this.books = data, // next - wenn die Daten erfolgreich empfangen wurden
    error: (err) => console.error('An error occured while trying to load the books: ', err)
  });
}
}

