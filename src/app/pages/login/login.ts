import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginPage {

  constructor(private router: Router) {}

  login() {
    // simulamos login correcto
    localStorage.setItem('token', 'ok');
    this.router.navigate(['/categories']);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}

