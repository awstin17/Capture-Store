import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { ImageProvider } from '../../providers/image/image';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _image: ImageProvider, public viewCtrl: ViewController) { this.index = this.navParams.get("i"); }

  index: any;
  constraints: any = { audio: false, video: { facingMode: "user", width: 500, height: 500 } };

  screenshotButton: any = document.querySelector('#screenshot-button');
  // img: any = document.querySelector('#imageimage');
  @ViewChild('screenshotimage') img;
  canvas: any = document.createElement('canvas');
  @ViewChild('video') video;

  ionViewDidEnter() {
    navigator.mediaDevices.getUserMedia(this.constraints)
      .then(function (mediaStream) {
        document.querySelector('video').srcObject = mediaStream;
        document.querySelector('video').onloadedmetadata = function (e) {
          document.querySelector('video').play();
        };
      })
      .catch(function (err) { console.log(err.name + ": " + err.message); });
  }

  hideVideoandScreenshot() {
    this.video.nativeElement.style.display = "none";
    // this.img.nativeElement.style.display = "none";
    // this._image.show = 'home';
  }

  saveToDatabase() {

    this._image.postImage()
      .subscribe((res) => {
        alert("successfully posted!");
        this.dismissModal();
        // this._image.images.push(this._image.image);
        let data = res;
        this._image.images.push(data);

        this._image.image.fileName = '';
        this._image.image.subtitle = '';
        this._image.image.description = '';
      },

        (err) => alert("photo unsuccessfully uploaded to database")
      )


  }

  saveFromEditing() {
    let userId = this.navParams.get("id");
    let imgId = this.navParams.get("fk");

    this._image.editImage.subtitle = this._image.image.subtitle;
    this._image.editImage.description = this._image.image.description;
    this._image.saveImage(userId, imgId)
      .subscribe((res) => {
        alert("successful edit"); this.dismissModal()
        this._image.images[this.index].subtitle = this._image.editImage.subtitle;
        this._image.images[this.index].description = this._image.editImage.description;

        //The part below clears image object in the image service mostly so the subtitle and description values don't persist if you try to edit other photos
        this._image.image.fileName = '';
        this._image.image.subtitle = '';
        this._image.image.description = '';
      },
        (err) => alert("you suck at editing photos")
      )
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  takeScreenshot() {
    this.canvas.width = this.video.nativeElement.videoWidth;
    this.canvas.height = this.video.nativeElement.videoHeight;
    this.canvas.getContext('2d').drawImage(this.video.nativeElement, 0, 0);
    let base64Image = this.canvas.toDataURL('data:image/jpeg;base64,');
    this.img.nativeElement.src = base64Image;
    this._image.image.fileName = base64Image;
  }

}
