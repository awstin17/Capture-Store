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
    return this.http.post("https://capture-store-backend.herokuapp.com/api/appUsers", this.user)
  }

  login() {
    return this.http.post("https://capture-store-backend.herokuapp.com/api/appUsers/login", this.credentials);
  }

}
