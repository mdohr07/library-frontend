import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  searchTerm: string = '';

@Output() search = new EventEmitter<string>();

onInput(): void {
  this.search.emit(this.searchTerm);
}

onSubmit(): void {
  this.search.emit(this.searchTerm);
}

  // filterResults() {
  //   throw new Error('Method not implemented.');
  // }
}
