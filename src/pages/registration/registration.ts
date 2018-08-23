import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

import { LoginPage } from '../login/login';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _user: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  register() {
    this._user.register()
    .subscribe(
     (res: any) => { console.log(res);
      window.sessionStorage.setItem('token', res.token);
      window.sessionStorage.setItem('userId', res.userId); 
      this.navCtrl.setRoot(LoginPage);
      // this._user.userToken = window.sessionStorage.getItem('token');
      // this._user.userId = window.sessionStorage.getItem('userId');
     },
     (error) => console.log(error)
      )
  }
}
