import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { ImageProvider } from '../../providers/image/image';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private _user: UserProvider, private app: App, private _image: ImageProvider) {

  }

  logout() {
    this._user.logout()
      .subscribe(
        (response: any) => {

          window.sessionStorage.clear();
          alert("Thank you for using Snapz!");
          this._user.credentials.email = '';
          this._user.credentials.password = '';
          this._image.images = null;
          this.app.getRootNav().setRoot(LoginPage);
        },
        (error) => alert("For some reason this didn't work. Please try again")
      )
  }
}
