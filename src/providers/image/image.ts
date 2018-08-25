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

  constructor(public http: HttpClient, private sanitizer: DomSanitizer) {
    console.log('Hello ImageProvider Provider');
  }

  photoURL() {
    return this.sanitizer.bypassSecurityTrustUrl(this.image);
  }
    image: any = '';
    trustimage: any = '';
}
