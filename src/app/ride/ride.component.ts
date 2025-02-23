import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.css']
})
export class RideComponent implements OnInit {
  ngOnInit(): void {
   
  
  }

  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('accessToken'); // Clear the token
    this.router.navigate(['/login']);       // Redirect to login page
  }

  // Default coordinates for pickup (Connaught Place) and dropoff (IGI Airport)
}