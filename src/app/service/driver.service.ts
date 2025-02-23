import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode'; // For decoding JWT token

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  private baseUrl = 'http://localhost:8080/drivers'; // Base URL for driver-related APIs

  constructor(private http: HttpClient) {}

  /**
   * Extract userId from the JWT token stored in localStorage
   * @returns number - The userId extracted from the token
   */
  getUserIdFromToken(): number {
    const token = localStorage.getItem('accessToken'); // Retrieve the token from localStorage
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token); // Decode the token
        return decodedToken.userId; // Return the userId from the token
      } catch (error) {
        console.error('Error decoding token:', error);
        throw new Error('Invalid token format');
      }
    }
    throw new Error('Token not found');
  }

  /**
   * Make a user a driver by sending their details to the backend API
   * @param driverData - The data required to assign a driver role
   * @returns Observable<any> - Observable for the API response
   */
  makeDriver(driverData: { vehicleId: string; available: boolean }): Observable<any> {
    const userId = this.getUserIdFromToken(); // Extract userId from token
    const token = localStorage.getItem('accessToken'); // Retrieve the token from localStorage
    if (!userId || !token) {
      throw new Error('User ID or Token is missing');
    }

    // Set the Authorization header with the Bearer token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    const url = `${this.baseUrl}/makeDriver/${userId}`; // Construct the API endpoint
    return this.http.put(url, driverData, { headers }); // Include headers in the request
  }
}
