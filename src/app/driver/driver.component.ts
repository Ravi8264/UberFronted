import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
visible:boolean =true;

toggle() {
  this.visible=!this.visible
  //console.log(this.visible)
}

}
