import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomePage {

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToRestaurants() {
    console.log('voy a restaurantes');
    this.router.navigate(['/restaurants']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}

