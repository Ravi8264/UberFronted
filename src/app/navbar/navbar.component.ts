import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  dropdown: boolean = false;
  items: string[] = [
    'About us', 'Our offering', 'How Uber works', 'Impact',
    'Diversity, equity, and inclusion', 'Sustainability',
    'Explore', 'Newsroom', 'Investor', 'Autonomous', 'Blog', 'Careers'
  ];

  ngOnInit(): void {}

  toggleDropdown() {
    this.dropdown = !this.dropdown;  
  }

  onSelect1(value: string) {
    console.log('Selected value:', value);
  }
}
