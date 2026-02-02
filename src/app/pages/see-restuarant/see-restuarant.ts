import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-see-restaurant',
  templateUrl: './see-restuarant.html',
  styleUrls: ['./see-restuarant.css']
})
export class SeeRestuarant implements OnInit {

  isLoading = true;
  restaurant: any = null;

  constructor(private router: Router) {}

  ngOnInit() {

    setTimeout(() => {
      this.restaurant = {
        name: 'hhhhhhh',
        phone: '3416997685',
        address: 'Güemes 2066'
      };
      this.isLoading = false;
    }, 1500);
  }

  volver() {
    this.router.navigate(['/restaurants']);
  }
}

