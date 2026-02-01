import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-see-restaurant',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './see-restuarant.html',
  styleUrls: ['./see-restuarant.css']
})
export class SeeRestuarant {
  products = [
    { id: 1, name: 'Ravioles', price: 3200 },
    { id: 2, name: 'Cheesecake', price: 2500 }
  ];

  constructor(private route: ActivatedRoute) {}
}
