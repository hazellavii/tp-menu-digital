import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomePage implements OnInit {

  isLogged = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isLogged = !!localStorage.getItem('token');
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToRestaurants() {
    this.router.navigate(['/restaurants']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}

