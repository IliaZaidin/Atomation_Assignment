import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreweryItem } from '../types/breweryItem';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  myBreweries: BreweryItem[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('auth') === null) {
      this.router.navigate(['wishlist', 'login']);
    } else {
      this.myBreweries = JSON.parse(localStorage.getItem('wishlist') || '');
    }
  }
}
