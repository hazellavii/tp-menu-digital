import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  login(email: string, password: string) {
    // simulamos login (como Del Zotto)
    const user = {
      email,
      restaurantName: 'Mi Restaurante',
      phone: '3416997685',
      address: 'Lapida 2244'
    };

    localStorage.setItem('token', 'fake-token');
    localStorage.setItem('user', JSON.stringify(user));

    this.router.navigate(['/profile']);
  }

  register(data: any) {
    // guarda restaurante
    localStorage.setItem('restaurant', JSON.stringify(data));

    // después de registrarse → login
    this.router.navigate(['/login']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  isLogged(): boolean {
    return !!localStorage.getItem('token');
  }

  getUser() {
    const u = localStorage.getItem('user');
    return u ? JSON.parse(u) : null;
  }
}





