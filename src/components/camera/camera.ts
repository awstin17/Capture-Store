import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello CameraComponent Component');
    this.text = 'Hello World';
  }

}
