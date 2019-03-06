import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

import { TabsPage } from '../tabs/tabs';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private _user: UserProvider, public viewCtrl: ViewController) { }

  register() {
    this._user.register()
      .subscribe(
        (res: any) => {
          alert("successful registration!");
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('userId', res.userId);
          this.navCtrl.setRoot(TabsPage);
        },
        (error) => console.log(error.message, "error")
      )
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }
}
