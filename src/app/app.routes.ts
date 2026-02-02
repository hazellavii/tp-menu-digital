import { Routes } from '@angular/router';

import { HomePage } from './components/home/home';
import { LoginPage } from './pages/login/login';
import { RegisterPage } from './pages/register/register';
import { CategoryPage } from './pages/category/category';
import { Restaurant } from './pages/restuarant/restuarant';
import { SeeRestuarant } from './pages/see-restuarant/see-restuarant';
import { ProductDetailPage } from './pages/product-detail/product-detail';
import { ProfilesPage } from './pages/profiles/profiles';

import { guestUserGuard } from './guards/guestusers';
import { loggedUserGuard } from './guards/loggedusers';

export const routes: Routes = [
  { path: '', component: HomePage },

  { path: 'login', component: LoginPage, canActivate: [guestUserGuard] },
  { path: 'register', component: RegisterPage, canActivate: [guestUserGuard] },

  { path: 'categories', component: CategoryPage, canActivate: [loggedUserGuard] },
  { path: 'restaurants', component: Restaurant},
  { path: 'restaurant/:id', component: SeeRestuarant },
  { path: 'product/:id', component: ProductDetailPage, canActivate: [loggedUserGuard] },
  { path: 'profile', component: ProfilesPage, canActivate: [loggedUserGuard] },

  { path: '**', redirectTo: '' }
];
