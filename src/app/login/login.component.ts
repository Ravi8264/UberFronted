import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';  // Import the AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}

  onLogin(): void {
    console.log('Login Attempt:', this.email, this.password);
    
    // Call the login method from AuthService
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        // Redirect to the ride page after successful login
        this.router.navigate(['/ride']);
      },
      (error) => {
        console.error('Login failed:', error);
        this.errorMessage = 'Invalid email or password.';
      }
    );
  }
}
