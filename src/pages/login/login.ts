import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from  '../../providers/user/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _user: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this._user.login()
    .subscribe(
      (response: any) => {console.log(response);
      alert("You are logged in!");
        window.sessionStorage.setItem('token', response.token);
        window.sessionStorage.setItem('userId', response.userId);
        // this._userservice.userToken = window.sessionStorage.getItem('token');
        // this._userservice.userId = window.sessionStorage.getItem('userId');
      },
      (error) => alert("invalid credentials, booooo")
      
      )
  }

}
