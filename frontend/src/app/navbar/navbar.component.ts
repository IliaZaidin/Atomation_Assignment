import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  handleLogoutClick() {
    if (localStorage.getItem('auth') !== null) {
      localStorage.removeItem('auth');
    }
  }

  ngOnInit(): void {
  }

}
