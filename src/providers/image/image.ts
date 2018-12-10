import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Storage } from '@ionic/storage';

/*
  Generated class for the ImageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImageProvider {

  // id: any = '';
  // token: any = '';
  show: any;
  // photoTaken: boolean;
  // editModal: any;
  // subtitle: any = '';


  constructor(public http: HttpClient) {}

    image: any = {
      fileName: '',
      subtitle: '',
      description: ''
    }

    editImage: any = {
      subtitle: '',
      description: ''
    }

    images: any;

  getImages() {
    return this.http.get("https://capture-store-backend.herokuapp.com/api/appUsers/" + window.sessionStorage.getItem('userId') + "/images?access_token=" + window.sessionStorage.getItem('token'))
  }

  postImage() {
    return this.http.post("https://capture-store-backend.herokuapp.com/api/appUsers/" + window.sessionStorage.getItem('userId') + "/images?access_token=" + window.sessionStorage.getItem('token'), this.image)
  }

  deleteImage(userId, imgId) {
    return this.http.delete("https://capture-store-backend.herokuapp.com/api/appUsers/" + userId + "/images/" + imgId + "?access_token=" + window.sessionStorage.getItem('token'))

  }

  saveImage(userId, imgId) {
    return this.http.put("https://capture-store-backend.herokuapp.com/api/appUsers/" + userId + "/images/" + imgId + "?access_token=" + window.sessionStorage.getItem('token'), this.editImage);
  }
}
