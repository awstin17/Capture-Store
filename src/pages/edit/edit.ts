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
  screenshotDisplay: any;
  videoDisplay: any = true;
  editFieldsDisplay: any;
  constraints: any = { audio: false, video: { facingMode: "environment" } };

  screenshotButton: any = document.querySelector('#screenshot-button');
  // img: any = document.querySelector('#imageimage');
  @ViewChild('screenshotimage') img;
  canvas: any = document.createElement('canvas');
  @ViewChild('video') video;

  ionViewDidEnter() {
    if (this._image.show === 'camera') {
      this.startUpVideo();
    }
  }

  saveToDatabase() {

    this._image.postImage()
      .subscribe((res) => {
        alert("successfully posted!");
        this.dismissModal();
        // this._image.images.push(this._image.image);
        let data = res;
        this._image.images.unshift(data);

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
    console.log('test');
  }

  startUpVideo() {
    navigator.mediaDevices.getUserMedia(this.constraints)
      .then(function (mediaStream) {
        document.querySelector('video').srcObject = mediaStream;
        document.querySelector('video').onloadedmetadata = function (e) {
          document.querySelector('video').play();
        };
      })
      .catch(function (err) { console.log(err.name + ": " + err.message); alert("It doesn't appear that we can see the camera preview on screen. Your browser may be blocking access. Try changing your browser's permission settings!") });
  }

  hideVideoandButtons() {
    this.video.nativeElement.style.display = "none";
    this.videoDisplay = false;

    // this.img.nativeElement.style.display = "none";
    // this._image.show = 'home';
  }

  showVideoandButtons() {
    this.videoDisplay = true;
    this.video.nativeElement.style.display = 'block';
  }

  hideScreenshot() {
    this.img.nativeElement.style.display = 'none';
    this.screenshotDisplay = false;
  }

  showScreenshot() {
    this.img.nativeElement.style.display = 'block';
    this.screenshotDisplay = true;
  }

  takeScreenshot() {

    this.canvas.width = this.video.nativeElement.videoWidth;
    this.canvas.height = this.video.nativeElement.videoHeight;
    this.canvas.getContext('2d').drawImage(this.video.nativeElement, 0, 0);
    let base64Image = this.canvas.toDataURL('data:image/jpeg;base64,');
    this.img.nativeElement.src = base64Image;
    this._image.image.fileName = base64Image;
    this.hideVideoandButtons();
    this.showScreenshot();
    // this.img.nativeElement.style.display === "block";
    // this.video.nativeElement.style.display === "none";
    // console.log(this.video.nativeElement.style.display);

  }

  takeAnother() {
    this.showVideoandButtons();
    this.hideScreenshot();
    // document.querySelector('video').play();
  }

  showEditFields() {
    this.editFieldsDisplay = true;
    this.screenshotDisplay = false;
  }

  hideEditFields() {
    this.editFieldsDisplay = false;
  }

  reverseCamera() {
    if (this.constraints.video.facingMode === "user") { this.constraints.video.facingMode = "environment" }
    else { this.constraints.video.facingMode = "user" }
    this.startUpVideo();

  }
}
