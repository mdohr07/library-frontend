import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form {
  username: string = '';
  password: string = '';
  remember: boolean = true;

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.remember);
  }
}
