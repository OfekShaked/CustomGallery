import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/services/error-handling-service/error-handler.service';
import { NightModeService } from 'src/app/core/services/night-mode-service/night-mode.service';
import { PrivateModeService } from 'src/app/core/services/private-mode-service/private-mode.service';

@Component({
  selector: 'app-permission-page',
  templateUrl: './permission-page.component.html',
  styleUrls: ['./permission-page.component.css']
})
export class PermissionPageComponent implements OnInit {

  constructor(private router: Router, public privateModeService: PrivateModeService, private errorHandlerService: ErrorHandlerService, public nightModeService: NightModeService) { }
  isCameraAllowed: boolean = false;
  isLocationAllowed: boolean = false;
  isPrivateAllowed: boolean = false;
  isPrivateCheckboxDisabled: boolean = false;
  password: string = "";
  passwordOld: string = "";
  passwordErrorMessage: string = "";
  ngOnInit(): void {
    this.getCameraAccess();
    this.getLocationAccess();
    this.checkIfPasswordExist();
  }

  async checkIfPasswordExist() {
    await this.privateModeService.checkIfPrivateModeEnabled();
    this.isPrivateCheckboxDisabled = this.privateModeService.isPrivateModeEnabled;
    this.isPrivateAllowed = this.isPrivateCheckboxDisabled;
  }

  privateAccessChanged = (e) => {
    if (!this.privateModeService.isPrivateModeEnabled) {
      this.isPrivateAllowed = e.target.checked;
      this.password = "";
    } else {
      e.preventDefault();
      this.isPrivateAllowed = true;
      this.isPrivateCheckboxDisabled = true;
    }
  }

  clearPasswordBox = (e) => {
    if (!this.isPrivateAllowed) {
      e.target.value = "";
    }

  }

  canChangeCamera = (e) => {
    if (!e.target.checked === this.isCameraAllowed) {
      e.preventDefault();
    }
  };

  canChangeLocation = (e) => {
    if (!e.target.checked === this.isLocationAllowed) {
      e.preventDefault();
    }
  }

  getCameraAccess = () => {
    try {
      let allowedPromise = navigator.mediaDevices.getUserMedia(
        {
          video: true
        }).catch(() => {
          this.isCameraAllowed = false;
        });
      if (allowedPromise) {
        this.isCameraAllowed = true;
      }
    } catch (err) {
      this.isCameraAllowed = false;
      this.errorHandlerService.handleError(err)
    }
  }
  getLocationAccess = () => {
    try {
      navigator.permissions.query({
        name: 'geolocation'
      }).then((result) => {
        if (result.state == 'granted') {
          this.isLocationAllowed = true;
          return;
        } else if (result.state == 'prompt') {
          navigator.geolocation.getCurrentPosition((location) => {
            this.isLocationAllowed = true; return;
          }, (err) => {
            this.isLocationAllowed = false; return;
          });
          this.isLocationAllowed = false; return;
        } else if (result.state == 'denied') {
          this.isLocationAllowed = false;
          return;
        }
      });
    } catch (err) {
      this.isLocationAllowed = false;
      this.errorHandlerService.handleError(err)
    }
  }

  async checkIfPasswordNeedsAnUpdate() {
    try {
      if (this.password && this.passwordOld && this.passwordOld.length !== 0 && this.password.length !== 0) {
        if (await this.privateModeService.checkIfPasswordIsCorrect(this.passwordOld)) {
          await this.privateModeService.setPrivateModePassword(this.password);
          return true;
        } else {
          this.passwordErrorMessage = "old password is incorrect!";
          setTimeout(() => {
            this.passwordErrorMessage = "";
          }, 4000);
          return false;
        }
      }
      return true;
    } catch (err) {
      this.errorHandlerService.handleError(err)
      return false;
    }
  }

  async nextPage() {
    try {
      if (this.isPrivateCheckboxDisabled) {
        if (await this.checkIfPasswordNeedsAnUpdate()) {
          this.router.navigateByUrl('/library');
        } else return;
      } else {
        this.privateModeService.setPrivateModePassword(this.password);
        this.router.navigateByUrl('/library');
      }
    } catch (err) {
      this.errorHandlerService.handleError(err)
    }
  }
}
