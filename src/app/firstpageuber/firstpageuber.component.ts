import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpageuber',
  templateUrl: './firstpageuber.component.html',
  styleUrls: ['./firstpageuber.component.css']
})
export class FirstpageuberComponent implements OnInit {
  // @Input() isTrue: boolean = true; // This will receive the boolean value from the parent

  signUpopen = true;
  isVisible = true;

  constructor() { }


  @Input() signUpVisible: boolean = true;  // Receive the value from the parent
  ngOnInit(): void {
    // console.log('Received isTrue value from parent:', this.isTrue);
    console.log('Received signUpVisible value:', this.signUpVisible);
  }

  ngOnChanges(): void {
    // console.log('Updated isTrue value from parent:', this.isTrue);
  }

  toggleOffcanvas() {
    this.isVisible = !this.isVisible;
  }





  


   
  






}
