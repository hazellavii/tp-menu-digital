import { Routes } from '@angular/router';

import { Home} from './pages/home/home';
import { RestaurantMenu } from './pages/restaurant-menu/restaurant-menu';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { DashboardOwner } from './pages/dashboard-owner/dashboard-owner';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'restaurant/:id', component: RestaurantMenu },
  { path: 'product/:id', component: ProductDetail },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'dashboard', component: DashboardOwner},
];


