import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth'; // Backend URL for login

  constructor(private http: HttpClient) {}

  // Login method
  login(email: string, password: string): Observable<any> {
    const credentials = { email, password };
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        // Debugging log for the entire response
        console.log('Raw Login Response:', response);

        if (response?.data?.accessToken) {
          const token = response.data.accessToken; // Extract the token
          localStorage.setItem('accessToken', token); // Save token in localStorage
          console.log('Access token stored in localStorage:', token);
        } else {
          console.error('Access token missing in response:', response);
        }
      })
    );
  }

  // Method to retrieve the token
  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }
}
