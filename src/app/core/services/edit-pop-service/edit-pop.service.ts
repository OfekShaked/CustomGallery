import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditPopService {
  popUpOpenVisibilty:string=''
  constructor() { }
  getPopUpClass():string{
    return this.popUpOpenVisibilty;
  }
  toggleEditPopUpVisible(): void {
    if(this.popUpOpenVisibilty==='is-open'){
      this.popUpOpenVisibilty='';
    }
    else{
      this.popUpOpenVisibilty='is-open';
    }
  }
}
