import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { ImageProvider } from '../../providers/image/image';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public events: Events, private _user: UserProvider, private _image: ImageProvider) {

  }

  //If logout is successful, clears id, token, user information, images displaying, and sends logout event 
  //For tabs page to pick up and clear the nav stack
  logout() {
    this._user.logout()
      .subscribe(
        (response: any) => {

          window.sessionStorage.clear();
          alert("Thank you for using Snapz!");
          this._user.credentials.email = '';
          this._user.credentials.password = '';
          this._image.images = null;
          this.events.publish('user:logout')
        },
        (error) => alert("For some reason this didn't work. Please try again")
      )
  }
}
