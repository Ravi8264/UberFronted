import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../signup/user.service';
 // Correct import path

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/auth';  // Update with your API URL

  constructor(private http: HttpClient) {}

  // Register method to send POST request to backend
  register(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, user); // Ensure backend endpoint is correct
  }
}
