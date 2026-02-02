import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restuarant.html',
  styleUrls: ['./restuarant.css']
})
export class Restaurant {

  restaurants = [
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
    },
    {
      id: 3,
      name: 'kkkkkkk',
      address: 'Güemes 2066, Cuarto',
      phone: '3416997686'
    },
    {
      id: 4,
      name: 'ssssss',
      address: 'Lapida 22',
      phone: '3416997685'
    },
    {
      id: 5,
      name: 'aaaaaa',
      address: 'Lapida 22',
      phone: '3416997685'
    },
    {
      id: 6,
      name: 'llllll',
      address: 'Lapida 22',
      phone: '3416997685'
    },
  ];

  constructor(private router: Router) {}

  goToRestaurant(id: number) {
    this.router.navigate(['/restaurant', id]);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
