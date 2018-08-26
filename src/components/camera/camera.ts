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
  icon: any = document.getElementById("icon");
  data: any = '';
  sanitizedData: any = '';

  constructor(private camera: Camera, private _image: ImageProvider, private sanitizer: DomSanitizer, private storage: Storage) {
    console.log('Hello CameraComponent Component');
    this.text = 'Hello World';
  }

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

    onClick() {
      // this.icon.style.color = "#488aff"
      // this.icon.style.fontSize = "65px";
      // this.icon.style.left = "42.3%";
      this.camera.getPicture(this.options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        // this.icon.style.color = "black"
        // this.icon.style.fontSize = "60px";
        // this.icon.style.left = "43%";
        // this._image.data = 'data:image/jpeg;base64,' + imageData
        this._image.data = imageData;
        // this.sanitizedData = this.sanitizer.bypassSecurityTrustUrl(this.data);
        // this._image.image.fileName = this.sanitizedData.changingThisBreaksApplicationSecurity;
        this._image.show = "yes plz";
        console.log(this._image.data);
        this._image.postImage()
          .subscribe((res) => console.log("successful response"),
            (err) => console.log("postimageerror")
          )
       }, (err) => {
        // this.icon.style.color = "black"
        // this.icon.style.fontSize = "60px";
        // this.icon.style.left = "43%";
        console.log("getpictureerror")
       });
    }
}
