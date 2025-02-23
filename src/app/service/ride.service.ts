import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RideService {
  private baseUrl = 'http://localhost:8080/rider/requestRide'; // Backend endpoint

  constructor(private http: HttpClient) {}

  // Send a ride request to the backend
  requestRide(
    pickupCoordinates: number[],
    dropOffCoordinates: number[],
    paymentMethod: string
  ): Observable<any> {
    const body = {
      pickupLocation: {
        type: 'Point',
        coordinates: pickupCoordinates,
      },
      dropOffLocation: {
        type: 'Point',
        coordinates: dropOffCoordinates,
      },
      paymentMethod,
    };

    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.error('Access token missing');
      return throwError(() => new Error('Authorization token is missing'));
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(this.baseUrl, body, { headers }).pipe(
      catchError((error) => {
        console.error('Error during the ride request:', error.message || error);
        return throwError(() => new Error('Ride request failed. Please try again.'));
      })
    );
  }
}
