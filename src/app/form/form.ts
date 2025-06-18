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
  mode: 'login' |'register' = 'login';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  remember: boolean = true;

  toggleMode() {
    this.mode = this.mode === 'login' ? 'register' : 'login';
  }

  onSubmit() {
    if (this.mode === 'register') {
        if (this.password !== this.confirmPassword) {
          console.log('The passwords do not match')
          return;
    } 
    console.log('Register:', this.username, this.password);
    } else {
      console.log('Login:', this.username, this.password);
    }
    // console.log('Username:', this.username);
    // console.log('Password:', this.password);
    // console.log('Remember Me:', this.remember);
  }
}
