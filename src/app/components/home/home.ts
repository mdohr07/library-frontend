import { Component } from '@angular/core';
import { BookList } from "../book-list/book-list";

@Component({
  selector: 'app-home',
  imports: [BookList],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
