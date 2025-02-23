import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
})
export class HelpComponent {
  contact = {
    name: '',
    email: '',
    message: '',
  };
  router: any;

  onSubmit(): void {
    // Here you would typically handle the form submission, e.g., send data to a server
    console.log('Contact form submitted:', this.contact);
    // Reset the form or show a success message as needed

    
  }
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
