import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from './user.service';  // Ensure User interface is imported

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    // Initialize form group with validation rules
    this.signupForm = new FormGroup(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
          this.passwordStrengthValidator,
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      this.passwordMatchValidator // Apply custom group-level validator for matching passwords
    );
  }

  ngOnInit(): void {}

  // Custom validator to check if password and confirm password match
  passwordMatchValidator: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } | null => {
    const group = control as FormGroup;
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  };

  // Custom validator to check password strength
  passwordStrengthValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.value;
    const hasUpperCase = /[A-Z]/.test(password);  // At least one uppercase letter
    const hasLowerCase = /[a-z]/.test(password);  // At least one lowercase letter
    const isLongEnough = password.length >= 8;    // Minimum length of 8 characters

    if (hasUpperCase && hasLowerCase && isLongEnough) {
      return null; // Password is valid
    } else {
      return { weakPassword: true }; // Invalid password
    }
  }

  // Signup method
  signup() {
    if (this.signupForm.invalid) {
      return;  // If the form is invalid, don't proceed
    }

    const userData: User = {
      name: this.signupForm.get('name')?.value,
      email: this.signupForm.get('email')?.value,
      password: this.signupForm.get('password')?.value,
    };

    this.userService.register(userData).subscribe(
      (response) => {
        console.log('User successfully registered:', response);
        this.router.navigate(['/ride']); // Navigate to login page on successful registration
      },
      (error) => {
        console.error('Error during registration:', error);
      }
    );
  }
}
