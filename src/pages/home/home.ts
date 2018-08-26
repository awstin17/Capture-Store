import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImageProvider } from '../../providers/image/image';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  show: boolean = false;
  images: any = [];
  data: any;

  constructor(public navCtrl: NavController, private _image: ImageProvider) {}

  ionViewDidEnter() {
    this._image.id = "5b81f51a602a26daf81febf1";
    this._image.token = "pOfDGPBoYVQDNvwEbyu52e0jawnbp9Xc2B6m1HO1aCl54IvegHTC7pFvz8LhVo2r";
    this._image.postImage()
      .subscribe((res) => {this.data = res; 
        console.log(this.data);
        // this.images.push(this.data[0].fileName);
        this.show=true;
        console.log(this.images);
      },
      (err) => console.log(err)
      )
  }

}
