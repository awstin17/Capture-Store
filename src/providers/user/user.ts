import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

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

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  register() {
    return this.http.post("http://localhost:3000/api/appUsers", this.user)
  }

  login() {
    return this.http.post("http://localhost:3000/api/appUsers/login", this.credentials);
  }
}
