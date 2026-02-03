import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterPage {

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
  register() {

    const newRestaurant = {
      id: Date.now(),
      name: 'Mi Restaurante',
      address: 'Dirección cargada',
      phone: '123456789',
      owner: 'Dueño',
      email: 'mail@mail.com'
    };
  
    const stored = localStorage.getItem('restaurants');
    const restaurants = stored ? JSON.parse(stored) : [];
  
    restaurants.push(newRestaurant);
  
    localStorage.setItem('restaurants', JSON.stringify(restaurants));
  
    // SOLO redirigir a login
    this.router.navigate(['/login']);
  }
  
  
  
}



