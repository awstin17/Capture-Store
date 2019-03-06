import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { ImageProvider } from '../../providers/image/image';

import { EditPage } from '../edit/edit';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private _image: ImageProvider, public navCtrl: NavController, private modalCtrl: ModalController) {}

  ionViewDidEnter() {
        this._image.getImages()
      .subscribe((res) => {
        this._image.images = res;
        this._image.images.reverse();
      },
      (err) => console.log(err)

      )
  }

  delete(userId, imgId, i) {
    this._image.deleteImage(userId, imgId)
      .subscribe((res) => {alert("successful deletion")
      this._image.images.splice(i, 1)
  },
      (err) => alert("you suck at deleting things")
    )
  }

  edit(userId, imgId, index) {
    this._image.show = "home";
    this.presentEditModal(userId, imgId, index);
  }

  presentEditModal(userId, imgId, index) {
    let obj = {id: userId, fk: imgId, i: index}
    let editModal = this.modalCtrl.create(EditPage, obj);
    editModal.present();
  }

}