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

  constructor(public navCtrl: NavController, public navParams: NavParams, public _image: ImageProvider, public viewCtrl : ViewController) {this.index = this.navParams.get("i");}

  index: any;

  saveToDatabase() {

      this._image.postImage()
      .subscribe((res) => { alert("successfully posted!");
        this.dismissModal();
        // this._image.images.push(this._image.image);
        let data = res;
        this._image.images.push(data);
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
      .subscribe((res) => {alert("successful edit"); this.dismissModal()
      this._image.images[this.index].subtitle = this._image.editImage.subtitle;
      this._image.images[this.index].description = this._image.editImage.description;
    },
      (err) => alert("you suck at editing photos")
      )
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
