import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  activeRoute: string = "";
  activeMenuItem: MenuItem = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Persons',
        routerLink: '/persons'
      }
    ]
  }
}