import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BreweryItem } from '../types/breweryItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  breweries: BreweryItem[] = [];

  userName: string = '';
  searchInput: string = '';

  constructor(private router: Router) { }

  handleSearchInput(event: any) {
    this.searchInput = event.target.value;
  }

  async handleSubmit(event: any) {
    try {
      event.preventDefault();
      const res = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${this.searchInput}&per_page=20`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
      if (res.ok) {
        this.breweries = await res.json();
      } else {
        const response = await Promise.reject(res);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  ngOnInit(): void {
    if (localStorage.getItem('auth') === null) {
      this.router.navigate(['', 'login']);
    } else {
      this.userName = JSON.parse(localStorage.getItem('auth') || '').name;

      (async () => {
        try {
          const res = await fetch(`https://api.openbrewerydb.org/breweries?&per_page=20`,
          {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
          if (res.ok) {
            this.breweries = await res.json();
          } else {
            const response = await Promise.reject(res);
            console.log(response);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }
}
