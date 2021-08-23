import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ImageModel from '../../models/image-model';
import { ErrorHandlerService } from '../error-handling-service/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  images: ImageModel[];
  refreshImagesCallback: () => void = () => { };

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {
    this.getImages();
  }

  async getImages() {
    try {
      const response = await this.http.get<any>("http://localhost:3000/images").toPromise();
      if (response.status == 200) {
        let imagesArray = new Array<ImageModel>();
        Object.assign(imagesArray, response.images);
        this.images = imagesArray;
      }
    } catch (err) {
      this.errorHandlerService.handleError(err);
      this.images = [];
    }
  }

}
