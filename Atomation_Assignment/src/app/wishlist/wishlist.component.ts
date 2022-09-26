import { Component, OnInit } from '@angular/core';
import { BreweryItem } from '../types/breweryItem';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  myBreweries: BreweryItem[] = [];

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('wishlist') !== null) {
      this.myBreweries = JSON.parse(localStorage.getItem('wishlist') || '');
    }
  }
}
