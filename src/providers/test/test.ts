import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ModalController } from 'ionic-angular';

import { RegistrationPage } from '../../pages/registration/registration';

/*
  Generated class for the TestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestProvider {

  constructor(public http: HttpClient, private modalCtrl: ModalController) {
    console.log('Hello TestProvider Provider');
  }

  registrationModal: any;

  presentRegistrationModal() {
    console.log("this also works")
    this.registrationModal = this.modalCtrl.create(RegistrationPage);
    this.registrationModal.present();
  }

  dismissRegistrationModal() {
    this.registrationModal.dismiss();
  }

}
