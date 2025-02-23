import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-off-canvas-sign-in',
  templateUrl: './off-canvas-sign-in.component.html',
  styleUrls: ['./off-canvas-sign-in.component.css'],

 
})
export class OffCanvasSignInComponent {

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
