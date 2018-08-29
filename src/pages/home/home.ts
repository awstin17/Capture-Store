import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { ModalController } from 'ionic-angular';

import { ImageProvider } from '../../providers/image/image';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  data: any;

  constructor(private _image: ImageProvider, public navCtrl: NavController) {}

  ionViewDidEnter() {
        this._image.getImages()
      .subscribe((res) => {
        this._image.images = res;
        this._image.photoTaken = true;
      },
      (err) => console.log(err)

      )
  }


}