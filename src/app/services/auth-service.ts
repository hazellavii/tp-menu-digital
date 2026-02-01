import { Injectable } from '@angular/core';
import { Auth } from '../interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(data: Auth): boolean {
    if (data.email && data.password) {
      localStorage.setItem('token', 'fake-token');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLogged(): boolean {
    return !!localStorage.getItem('token');
  }
}


