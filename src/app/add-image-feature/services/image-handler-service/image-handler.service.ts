import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImagesService } from 'src/app/core/services/images-service/images.service';
import { ErrorHandlerService } from 'src/app/core/services/error-handling-service/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ImageHandlerService {

  constructor(private http: HttpClient, private imagesService: ImagesService, private errorHandlerService: ErrorHandlerService) { }

  async uploadImageToServer(base64String: string): Promise<boolean> {
    try {
      const response = await this.http.post<any>("http://localhost:3000/images/add", { base64String: base64String }).toPromise();
      if (response) {
        if (response.status == 200) {
          this.imagesService.getImages();
          return true
        }
        else {
          return false;
        }
      }
    } catch (err) {
      this.errorHandlerService.handleError(err)
      return false;
    }
  }
  setUrl = (imageAsBase64String: string) => {
    return `url("${imageAsBase64String}")`
  }
  getBase64StringFromUrl = (url: string) => {
    let str = url.slice(5);
    str = str.slice(0, -2);
    return str;
  }
}
