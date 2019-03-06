import { Component } from '@angular/core';
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

  constructor(private _image: ImageProvider, public modalCtrl: ModalController) {}

  activateCamera() {
        this._image.show = "camera";
        this.presentEditModal();
  }

  presentEditModal() {
    let editModal = this.modalCtrl.create(EditPage, {from2: "camera", id: "nada", fk: "nada"});
    editModal.present();
  }
}