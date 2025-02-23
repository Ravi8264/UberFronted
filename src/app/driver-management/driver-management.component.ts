import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DriverService } from '../service/driver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-management',
  templateUrl: './driver-management.component.html',
  styleUrls: ['./driver-management.component.css'],
})
export class DriverManagementComponent implements OnInit {
  driverForm: FormGroup;

  constructor(private driverService: DriverService, private router: Router) {
    // Initialize the form with all fields as mandatory
    this.driverForm = new FormGroup({
      vehicleId: new FormControl('', [Validators.required]),
      aadharCard: new FormControl('', [Validators.required]),
      drivingLicense: new FormControl('', [Validators.required]),
      panCard: new FormControl('', [Validators.required]),
      available: new FormControl(false, [Validators.requiredTrue]),
    });
  }

  ngOnInit(): void {}

  // Method to handle form submission
  onFormSubmit() {
    if (this.driverForm.invalid) {
      return; // Stop submission if the form is invalid
    }

    const driverData = this.driverForm.value; // Get form data
    console.log('Form submitted with data:', driverData);

    // Send data to backend via DriverService
    this.driverService.makeDriver(driverData).subscribe(
      (response) => {
        console.log('Driver successfully assigned:', response);
        alert('Driver has been successfully assigned!');
        this.router.navigate(['/notification']); // Navigate after success
      },
      (error) => {
        console.error('Error assigning driver:', error);
        alert('An error occurred while assigning the driver.');
      }
    );
  }
}
