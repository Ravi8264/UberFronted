import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notifactionofride',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotifactionofrideComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.removeItem('accessToken'); 
    this.router.navigate(['/driverlogin']);       
  }

}
