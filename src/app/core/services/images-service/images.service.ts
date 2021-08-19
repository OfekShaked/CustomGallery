import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ImageModel from '../../models/image-model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  images: ImageModel[];

  constructor(private http: HttpClient) { 
    this.getImages();
  }

  async getImages() {
    const response = await this.http.get<any>("http://localhost:3000/images").toPromise();
    if (response.status == 200) {
      let imagesArray = new Array<ImageModel>();
      Object.assign(imagesArray, response.images);
      this.images = imagesArray;
    }
  }
}
