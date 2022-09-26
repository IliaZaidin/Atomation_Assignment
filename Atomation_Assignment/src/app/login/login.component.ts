import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAuth = {
    name: '',
    email: '',
    password: '',
  }

  isDisabled: boolean = false;

  constructor(private router: Router) { }

  handleNameInput(event: any) {
    this.userAuth.name = event.target.value;
  }

  handleEmailInput(event: any) {
    this.userAuth.email = event.target.value;
  }

  handlePasswordInput(event: any) {
    this.userAuth.password = event.target.value;
  }

  handleSubmit(event: any) {
    event.preventDefault();
    if (localStorage.getItem('auth') === null) {
      localStorage.setItem('auth', JSON.stringify(this.userAuth));
    }
    this.router.navigate(['/login', '/']);
  }

  ngOnInit(): void {
  }

}
