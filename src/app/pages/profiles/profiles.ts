import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profiles.html',
  styleUrls: ['./profiles.css']
})
export class ProfilesPage implements OnInit {

  restaurant: any;

  constructor(private router: Router) {}

  ngOnInit() {
    const data = localStorage.getItem('restaurant');
    if (data) {
      this.restaurant = JSON.parse(data);
    }
  }

  goToCategories() {
    this.router.navigate(['/categories']);
  }

  goToProducts() {
    this.router.navigate(['/product', 1]);
  }

  goToMyMenu() {
    if (this.restaurant?.id) {
      this.router.navigate(['/restaurant', this.restaurant.id]);
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
