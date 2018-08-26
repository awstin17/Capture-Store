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
    console.log(this._image.sanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64,file:///storage/emulated/0/Android/data/io.ionic.devapp/cache/1535299601949.jpg"))
    // this._image.postImage()
    //   .subscribe((res) => {this.data = res; 
    //     console.log(this.data);
    //     // this.images.push(this.data[0].fileName);
    //     this.show=true;
    //     console.log(this.images);
    //   },
    //   (err) => console.log(err)
    //   )
  }

}
