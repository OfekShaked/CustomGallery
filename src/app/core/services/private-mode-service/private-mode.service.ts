import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrivateModeService {
  isPrivateModeEnabled: boolean = false;
  isCurrentlyInPrivateMode:boolean=false;
  togglePrivateImagesCallback: ()=>void;
  constructor(private http: HttpClient) {
    this.checkIfPrivateModeEnabled();
   }

  setPrivateModeEnabled() {
    this.isPrivateModeEnabled = true;
  }
  setPrivateModeDisabled() {
    this.isPrivateModeEnabled = false;
  }
  goInPrivateMode(){
    this.isCurrentlyInPrivateMode=true;
    this.togglePrivateImagesCallback();
  }
  goOutPrivateMode(){
    this.isCurrentlyInPrivateMode=false;
    this.togglePrivateImagesCallback();
  }

  async setPrivateModePassword(password: string) {
    await this.http.post<any>("http://localhost:3000/library/setpassword", { password: password }).toPromise();
    if (password !== "") {
      this.setPrivateModeEnabled();
    }
  }

  async checkIfPrivateModeEnabled() {
    const response = await this.http.get<any>("http://localhost:3000/library/privatemode").toPromise();
    if (response.status === 200 && response.isEnabled) {
      this.setPrivateModeEnabled();
    }
    else {
      this.setPrivateModeDisabled();
    }
  }

  async checkIfPasswordIsCorrect(password: string) {
    const response = await this.http.post<any>("http://localhost:3000/library/checkpassword", { password: password }).toPromise();
    if (response.status === 200 && response.isCorrect) {
      return true;
    }
    else {
      return false;
    }
  }
}
