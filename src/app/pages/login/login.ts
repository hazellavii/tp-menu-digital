import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginPage {

  constructor(private router: Router) {}

  login() {
    // login simulado OK
    localStorage.setItem('token', '123456');

    const restaurant = {
      id: 1,
      name: 'Mi Restaurante',
      address: 'Dirección',
      phone: '123456789'
    };

    localStorage.setItem('restaurant', JSON.stringify(restaurant));

    console.log('LOGIN OK, voy a profile');
    this.router.navigate(['/profile']);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
