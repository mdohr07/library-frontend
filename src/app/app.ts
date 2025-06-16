import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookList } from "./components/book-list/book-list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, BookList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
//  protected title = 'frontend';
}
