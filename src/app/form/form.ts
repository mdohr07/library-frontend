import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
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
