import {Component, ViewChild } from '@angular/core';
import {NavController} from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { ImageProvider } from '../../providers/image/image';

import { EditPage } from '../edit/edit';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private _image: ImageProvider, public navCtrl: NavController, private modalCtrl: ModalController) {}

  constraints: any = { audio: false, video: { facingMode: "user", width: 500, height: 500 } }; 
  
  screenshotButton: any = document.querySelector('#screenshot-button');
  // img: any = document.querySelector('#imageimage');
  @ViewChild('screenshotimage') img;
  canvas: any = document.createElement('canvas');
  @ViewChild('video') video;

  ionViewDidEnter() {
        this._image.getImages()
      .subscribe((res) => {
        this._image.images = res;
        this._image.photoTaken = true;
        console.log(this._image.images);
      },
      (err) => console.log(err)

      )
      
      
navigator.mediaDevices.getUserMedia(this.constraints)
.then(function(mediaStream) {
  document.querySelector('video').srcObject = mediaStream;
  document.querySelector('video').onloadedmetadata = function(e) {
    document.querySelector('video').play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
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

  hello() {
    console.log('hello');
    this.canvas.width = this.video.nativeElement.videoWidth;
  this.canvas.height = this.video.nativeElement.videoHeight;
  this.canvas.getContext('2d').drawImage(this.video.nativeElement, 0, 0);
  let base64Image = this.canvas.toDataURL('data:image/jpeg;base64,');
  this.img.nativeElement.src = base64Image;
  console.log(base64Image);
  this._image.image.fileName = base64Image;
  }

  saveToDatabase() {

    this._image.postImage()
    .subscribe((res) => { alert("successfully posted!");
      let data = res;
      this._image.images.push(data);
    },

      (err) => alert("photo unsuccessfully uploaded to database")
    )
  
  
}
}