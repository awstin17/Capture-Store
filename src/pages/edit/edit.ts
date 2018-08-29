import { Component } from '@angular/core';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public _image: ImageProvider, public viewCtrl : ViewController) {
  }

  saveToDatabase() {
    this._image.postImage()
      .subscribe((res) => { alert("successfully posted!");
        this.dismissModal();
        this._image.images.push(this._image.image);
      },

        (err) => console.log(err.message)
      )
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }
}
