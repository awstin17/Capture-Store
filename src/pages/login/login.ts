import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from  '../../providers/user/user';
import { TabsPage } from '../tabs/tabs';
import { ModalController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';

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
      (response: any) => {

        //This part below, upon successful login, takes the token and 
        // userId and places them in the browser's session storage
        // Then it sets the root page as the tabs page"

        alert("You are logged in!");
        window.sessionStorage.setItem('token', response.token);
        window.sessionStorage.setItem('userId', response.userId);
        this.navCtrl.setRoot(TabsPage);
      },
      (error) => alert("invalid credentials. Please try again")
      
      )
  }

  presentRegistrationModal() {

    //This essentially just pops up the registration page as a modal

    let registrationModal = this.modalCtrl.create(RegistrationPage);
    registrationModal.present();
  }
}
