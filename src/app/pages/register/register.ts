import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterPage {

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

  register() {
    // simulamos registro
    localStorage.setItem('token', 'ok');
    this.router.navigate(['/categories']);
  }
}



