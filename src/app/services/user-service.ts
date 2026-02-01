import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = {
    id: 1,
    name: 'Usuario',
    email: 'usuario@email.com'
  };

  getUser(): User {
    return this.user;
  }
}
