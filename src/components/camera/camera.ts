import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImageProvider } from '../../providers/image/image';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { EditPage } from '../../pages/edit/edit';

/**
 * Generated class for the CameraComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'camera',
  templateUrl: 'camera.html'
})
export class CameraComponent {

  icon: any = document.getElementById("icon");

  constructor(private camera: Camera, private _image: ImageProvider, private storage: Storage, public modalCtrl: ModalController) {
    console.log('Hello CameraComponent Component');
  }

  onClick() {

    // this.icon.style.color = "#488aff"
    // this.icon.style.fontSize = "65px";
    // this.icon.style.left = "42.3%";
    let options = {
      sourceType: this.camera.PictureSourceType.CAMERA,
    // destinationType: this.camera.DestinationType.FILE_URI,
      destinationType: this.camera.DestinationType.DATA_URL
    };
    this.camera.getPicture(options).then((imageData) => {
      // this.icon.style.color = "black"
      // this.icon.style.fontSize = "60px";
      // this.icon.style.left = "43%";

      this._image.image.fileName = 'data:image/jpeg;base64,' + imageData;
      this._image.photoTaken = true;
      this.presentEditModal();
    }, (err) => {
      // this.icon.style.color = "black"
      // this.icon.style.fontSize = "60px";
      // this.icon.style.left = "43%";
      alert("unsuccessful image capture");
    });
  }

  presentEditModal() {
    let editModal = this.modalCtrl.create(EditPage);
    editModal.present();
  }



  // options: CameraOptions = {
  //   quality: 100,
  //   destinationType: this.camera.DestinationType.FILE_URI,
  //   encodingType: this.camera.EncodingType.JPEG,
  //   mediaType: this.camera.MediaType.PICTURE
  // }

  // //   onClick() {
  //     this.icon.style.color = "#488aff"
  //     this.icon.style.fontSize = "65px";
  //     this.icon.style.left = "42.3%";
  // //     this.camera.getPicture(this.options).then((imageData) => {
  // //       // imageData is either a base64 encoded string or a file URI
  // //       // If it's base64 (DATA_URL):
  //       this.icon.style.color = "black"
  //       this.icon.style.fontSize = "60px";
  //       this.icon.style.left = "43%";
  // //       // this._image.data = 'data:image/jpeg;base64,' + imageData
  // //       this._image.data = imageData;
  // //       // this.sanitizedData = this.sanitizer.bypassSecurityTrustUrl(this.data);
  // //       // this._image.image.fileName = this.sanitizedData.changingThisBreaksApplicationSecurity;
  // //       this._image.show = "yes plz";
  // //       console.log(this.data);
  // //       this._image.postImage()
  // //         .subscribe((res) => console.log("successful response"),
  // //           (err) => console.log("postimageerror")
  // //         )
  // //      }, (err) => {
  // //       // this.icon.style.color = "black"
  // //       // this.icon.style.fontSize = "60px";
  // //       // this.icon.style.left = "43%";
  // //       console.log("getpictureerror")
  // //      });
  // //   }
}