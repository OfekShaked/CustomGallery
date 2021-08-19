import { Injectable } from '@angular/core';
import ImageModel from '../../models/image-model';
import LocationModel from '../../models/location-model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditPopService {
  currentImageModel:ImageModel=null;
  currentImageSrc:string;
  popUpOpenVisibilty:string=''
  selectedCategories: Array<string> = [];
  newTitle: string = "";
  location: LocationModel=null;
  private customSubject = new Subject<any>();
  customObservable=this.customSubject.asObservable();
  constructor() { }
  getPopUpClass():string{
    return this.popUpOpenVisibilty;
  }
  toggleEditPopUpVisible(image:ImageModel): void {
    if(this.popUpOpenVisibilty==='is-open'){
      this.popUpOpenVisibilty='';
      this.currentImageModel=null;
      this.currentImageSrc=null;
      this.newTitle=null;
      this.location=null;
      this.selectedCategories=null;
    }
    else{
      this.popUpOpenVisibilty='is-open';
      this.currentImageModel=image;
      this.currentImageSrc = `data:image/gif;base64,${this.currentImageModel.base64String}`
      this.newTitle=this.currentImageModel.title;
      this.location=this.currentImageModel.location;
      this.selectedCategories=this.currentImageModel.categories;
      this.customSubject.next();
    }
  }
}
