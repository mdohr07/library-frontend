import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  searchTerm: any;
  filterResults() {
    throw new Error('Method not implemented.');
  }
}
