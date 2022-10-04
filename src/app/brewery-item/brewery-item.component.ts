import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreweryItem } from '../types/breweryItem';

@Component({
  selector: 'app-brewery-item',
  templateUrl: './brewery-item.component.html',
  styleUrls: ['./brewery-item.component.css']
})
export class BreweryItemComponent implements OnInit {

  @Input() breweryItem: BreweryItem = {} as BreweryItem;
  // @Output() breweryEmitter = new EventEmitter<BreweryItem>();

  isLiked: boolean = false;
  isMoreInfoOpen: boolean = false;
  currentRoute: string = '';
  wishlist: BreweryItem[] = [];

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
  }

  handleLike() {
    this.isLiked = true;

    if (localStorage.getItem('wishlist') !== null) {
      this.wishlist = JSON.parse(localStorage.getItem('wishlist') || '');
    }
    this.wishlist.push(this.breweryItem);
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }

  handleDislike() {
    this.isLiked = false;

    if (localStorage.getItem('wishlist') !== null) {
      this.wishlist = JSON.parse(localStorage.getItem('wishlist') || '');
      this.wishlist.splice(this.wishlist.indexOf(this.breweryItem))
      localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    }
  }

  handleRemove() {
    this.isLiked = false;
    
    if (localStorage.getItem('wishlist') !== null) {
      this.wishlist = JSON.parse(localStorage.getItem('wishlist') || '');
      this.wishlist.splice(this.wishlist.indexOf(this.breweryItem))
      localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('wishlist') !== null) {
      this.wishlist = JSON.parse(localStorage.getItem('wishlist') || '');
      if (this.wishlist.find(item => item.name === this.breweryItem.name)) {
        this.isLiked = true;
      } else {
        this.isLiked = false;
      }
    }
  }
}
