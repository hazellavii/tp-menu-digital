import { CanActivateFn } from '@angular/router';

export const guestUserGuard: CanActivateFn = () => {
  const token = localStorage.getItem('token');
  return !token;
};
