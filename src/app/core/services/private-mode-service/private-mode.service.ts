import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandlerService } from '../error-handling-service/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class PrivateModeService {
  isPrivateModeEnabled: boolean = false;
  isCurrentlyInPrivateMode: boolean = false;
  togglePrivateImagesCallback: () => void;
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {
    this.checkIfPrivateModeEnabled();
  }

  setPrivateModeEnabled() {
    this.isPrivateModeEnabled = true;
  }
  setPrivateModeDisabled() {
    this.isPrivateModeEnabled = false;
  }
  goInPrivateMode() {
    this.isCurrentlyInPrivateMode = true;
    this.togglePrivateImagesCallback();
  }
  goOutPrivateMode() {
    this.isCurrentlyInPrivateMode = false;
    this.togglePrivateImagesCallback();
  }

  async setPrivateModePassword(password: string) {
    try {
      if (password && password.length > 0) {
        await this.http.post<any>("http://localhost:3000/library/setpassword", { password: password }).toPromise();
        this.setPrivateModeEnabled();
      }
    } catch (err) {
      this.errorHandlerService.handleError(err)
    }
  }

  async checkIfPrivateModeEnabled() {
    try {
      const response = await this.http.get<any>("http://localhost:3000/library/privatemode").toPromise();
      if (response.status === 200 && response.isEnabled) {
        this.setPrivateModeEnabled();
      }
      else {
        this.setPrivateModeDisabled();
      }
    } catch (err) {
      this.errorHandlerService.handleError(err)
    }
  }

  async checkIfPasswordIsCorrect(password: string) {
    try {
      const response = await this.http.post<any>("http://localhost:3000/library/checkpassword", { password: password }).toPromise();
      if (response.status === 200 && response.isCorrect) {
        return true;
      }
      else {
        return false;
      }
    } catch (err) {
      this.errorHandlerService.handleError(err)
    }
  }
}
