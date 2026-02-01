import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service';
import { User } from '../../interface/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profiles.html',
  styleUrls: ['./profiles.css']
})
export class ProfilesPage {
  user: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.user = this.userService.getUser();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
