import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImageProvider } from '../../providers/image/image';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  images: any = [];
  data: any;

  constructor(public navCtrl: NavController, private _image: ImageProvider) {}

  ionViewDidEnter() {
    this._image.getImages()
      .subscribe((res) => {this.data = res; 
        console.log(this.data);
        this.images.push(this.data[0].fileName);
        console.log(this.images);
      },
      (err) => console.log(err)
      )
  }

}
