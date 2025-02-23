import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('accessToken'); // Check if token exists

    if (token) {
      return true; // If the user has a token, they are logged in, so allow access
    } else {
      this.router.navigate(['/login']); // Redirect to login if not logged in
      return false;
    }
  }
}
