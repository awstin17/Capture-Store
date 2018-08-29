import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the ImageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImageProvider {

  id: any = '';
  token: any = '';
  show: any;
  photoTaken: boolean;
  editModal: any;
  subtitle: any = '';


  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello ImageProvider Provider');
  }

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
    return this.http.get("http://summer-austin-2018-phortonssf.c9users.io:8080/api/appUsers/" + window.sessionStorage.getItem('userId') + "/images?access_token=" + window.sessionStorage.getItem('token'))
  }

  postImage() {
    return this.http.post("http://summer-austin-2018-phortonssf.c9users.io:8080/api/appUsers/" + window.sessionStorage.getItem('userId') + "/images?access_token=" + window.sessionStorage.getItem('token'), this.image)
  }

  deleteImage(userId, imgId) {
    return this.http.delete("http://summer-austin-2018-phortonssf.c9users.io:8080/api/appUsers/" + userId + "/images/" + imgId + "?access_token=" + window.sessionStorage.getItem('token'))

  }

  saveImage(userId, imgId) {
    return this.http.put("http://summer-austin-2018-phortonssf.c9users.io:8080/api/appUsers/" + userId + "/images/" + imgId + "?access_token=" + window.sessionStorage.getItem('token'), this.editImage);
  }
}
