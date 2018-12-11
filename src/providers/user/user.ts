import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {}

  user: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  credentials: any = {
    email: '',
    password: ''
  }

  register() {
    console.log(this.user);
    return this.http.post("https://capture-store-backend.herokuapp.com/api/appUsers", this.user)
  }

  login() {
    return this.http.post("https://capture-store-backend.herokuapp.com/api/appUsers/login", this.credentials);
  }

  logout() {
    return this.http.post("https://capture-store-backend.herokuapp.com/api/appUsers/logout?access_token=" + window.sessionStorage.getItem('token'), window.sessionStorage.getItem('token'));
  }
}
