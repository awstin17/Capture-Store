import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';


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

  constructor(private camera: Camera) {
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
      console.log("wahoooooo");
      document.getElementById("icon").style.color = "#488aff"
      document.getElementById("icon").style.fontSize = "65px";
      document.getElementById("icon").style.left = "42.3%";
      this.camera.getPicture(this.options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        document.getElementById("icon").style.color = "black"
        document.getElementById("icon").style.fontSize = "60px";
        document.getElementById("icon").style.left = "43%";
        let base64Image = 'data:image/jpeg;base64,' + imageData;
       }, (err) => {
        document.getElementById("icon").style.color = "black"
        document.getElementById("icon").style.fontSize = "60px";
        document.getElementById("icon").style.left = "43%";
       });
    }
}
