import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { ImageProvider } from '../../providers/image/image';
import { ModalController } from 'ionic-angular';

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

  constructor(private camera: Camera, private _image: ImageProvider, public modalCtrl: ModalController) {}

  onClick() {
    // let icon = document.getElementById("icon");
    // icon.style.color = "#488aff"
    // icon.style.fontSize = "65px";
    // icon.style.left = "42.3%";

    let options = {
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL
    };

    this.camera.getPicture(options).then((imageData) => {
        // icon.style.color = "black"
        // icon.style.fontSize = "60px";
        // icon.style.left = "43%";
        this._image.show = "camera";
        this._image.image.fileName = 'data:image/jpeg;base64,' + imageData;
        this._image.photoTaken = true;
        this.presentEditModal();
    }, 
      (err) => {
        // icon.style.color = "black"
        // icon.style.fontSize = "60px";
        // icon.style.left = "43%";
        alert("unsuccessful image capture");
    });
  }

  presentEditModal() {
    let editModal = this.modalCtrl.create(EditPage, {from2: "camera", id: "nada", fk: "nada"});
    editModal.present();
  }
}