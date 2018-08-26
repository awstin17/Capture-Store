import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

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

  constructor(public http: HttpClient, public sanitizer: DomSanitizer) {
    console.log('Hello ImageProvider Provider');
  }

  photoURL() {
    return this.sanitizer.bypassSecurityTrustUrl(this.image);
  }
    image: any = {
      fileName: 'test2.jpg'
    }
    trustimage: any = '';
    data: any;

  getImages() {
    return this.http.get("http://summer-austin-2018-phortonssf.c9users.io:8080/api/appUsers/" + window.sessionStorage.getItem('userId') + "/images?access_token=" + window.sessionStorage.getItem('token'))
  }

  postImage() {
    return this.http.post("http://summer-austin-2018-phortonssf.c9users.io:8080/api/appUsers/" + window.sessionStorage.getItem('userId') + "/images?access_token=" + window.sessionStorage.getItem('token'), this.image)
  }
}
