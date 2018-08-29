import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from  '../../providers/user/user';
import { TabsPage } from '../tabs/tabs';
import { ModalController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private _user: UserProvider) {
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
        this.navCtrl.setRoot(TabsPage);
      },
      (error) => alert("invalid credentials, booooo")
      
      )
  }

  presentRegistrationModal() {
    let registrationModal = this.modalCtrl.create(RegistrationPage);
    registrationModal.present();
  }
}
