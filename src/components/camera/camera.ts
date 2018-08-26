import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImageProvider } from '../../providers/image/image';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { Storage } from '@ionic/storage';


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

  text: string;

  constructor(private camera: Camera, private _image: ImageProvider, private sanitizer: DomSanitizer, private storage: Storage) {
    console.log('Hello CameraComponent Component');
    this.text = 'Hello World';
  }

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

    onClick() {
      document.getElementById("icon").style.color = "#488aff"
      document.getElementById("icon").style.fontSize = "65px";
      document.getElementById("icon").style.left = "42.3%";
      this.camera.getPicture(this.options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        document.getElementById("icon").style.color = "black"
        document.getElementById("icon").style.fontSize = "60px";
        document.getElementById("icon").style.left = "43%";
        this._image.image = 'data:image/jpeg;base64,' + imageData
        // this.storage.set('1', this._image.image);
        // this.storage.get('1').then((res) => console.log(res))
        // this._image.photoURL();
        console.log(this._image.image)
       }, (err) => {
        document.getElementById("icon").style.color = "black"
        document.getElementById("icon").style.fontSize = "60px";
        document.getElementById("icon").style.left = "43%";
       });
    }
}
