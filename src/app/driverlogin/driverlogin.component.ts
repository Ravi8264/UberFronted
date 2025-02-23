import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-driverlogin',
  templateUrl: './driverlogin.component.html',
  styleUrls: ['./driverlogin.component.css'],
})
export class DriverloginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLogin(): void {
    console.log('Login Attempt:', this.email, this.password);

    // Call the login method from AuthService
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        // Token is already saved in localStorage inside AuthService
        this.router.navigate(['/driverManagement']);
      },
      (error) => {
        console.error('Login failed:', error);
        this.errorMessage = 'Invalid email or password.';
      }
    );
  }
}
