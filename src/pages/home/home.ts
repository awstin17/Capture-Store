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

  constructor(private _image: ImageProvider, public navCtrl: NavController, private _DomSanitizationService: DomSanitizer) {}

  ionViewDidEnter() {
    this._image.getImages()
      .subscribe((res) => {console.log(res);
        this.data = res;
        console.log(this.data[28]);
      },
      (err) => console.log(err)

      )
  }


}