import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restuarants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restuarant.html',
  styleUrls: ['./restuarant.css']
})
export class Restaurant {

  restaurants: any[] = [];

  constructor(private router: Router) {
    this.loadRestaurants();
  }

  loadRestaurants() {
    const stored = localStorage.getItem('restaurants');

    if (stored) {
      this.restaurants = JSON.parse(stored);
    } else {
      // restaurantes iniciales
      this.restaurants = [
        {
          id: 1,
          name: 'hhhhhh',
          address: 'Güemes 2066, Cuarto',
          phone: '3416997685'
        },
        {
          id: 2,
          name: 'jjjjjj',
          address: 'Lapida 22',
          phone: '3416997685'
        }
      ];

      localStorage.setItem('restaurants', JSON.stringify(this.restaurants));
    }

    console.log('LISTADO:', this.restaurants);
  }

  goToRestaurant(id: number) {
    this.router.navigate(['/restaurant', id]);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
